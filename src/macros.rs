macro_rules! string_enum {
    ($ty:ident: $($key:ident => $value:expr,)*) => {
        #[allow(non_camel_case_types)]
        #[derive(Copy, Clone, Debug, PartialEq, Eq)]
        pub enum $ty {
            $($key),*
        }

        impl<'a> Into<&'static str> for &'a $ty {
            fn into(self) -> &'static str {
                match *self {
                    $($ty::$key => $value),*
                }
            }
        }

        impl $ty {
            fn try_from(str: &str) -> Option<Self> {
                match str {
                    $($value => Some($ty::$key),)*
                    _ => None,
                }
            }
        }

        impl ::serde::de::Deserialize for $ty {
            fn deserialize<D: ::serde::de::Deserializer>(d: D) -> Result<Self, D::Error> {
                struct V;

                impl ::serde::de::Visitor for V {
                    type Value = $ty;

                    fn visit_str<E: ::serde::de::Error>(self, value: &str) -> Result<Self::Value, E> {
                        $ty::try_from(value).ok_or_else(|| E::invalid_value(::serde::de::Unexpected::Str(value), &"unknown value"))
                    }

                    fn expecting(&self, formatter: &mut ::std::fmt::Formatter) -> ::std::fmt::Result {
                        write!(formatter, "a variant string")
                    }
                }

                d.deserialize(V)
            }
        }

        impl ::serde::ser::Serialize for $ty {
            fn serialize<S: ::serde::ser::Serializer>(&self, s: S) -> Result<S::Ok, S::Error> {
                ::serde::ser::Serialize::serialize(Into::<&'static str>::into(self), s)
            }
        }
    };
}
