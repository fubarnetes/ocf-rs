var searchIndex = {};
searchIndex['ocf'] = {"items":[[0,"","ocf","",null,null],[3,"Spec","","",null,null],[12,"version","","",0,null],[12,"platform","","",0,null],[12,"process","","",0,null],[12,"root","","",0,null],[12,"hostname","","",0,null],[12,"mounts","","",0,null],[3,"Root","","",null,null],[12,"path","","",1,null],[12,"readonly","","",1,null],[3,"Process","","",null,null],[12,"terminal","","",2,null],[12,"linux_user","","",2,null],[12,"cmd","","",2,null],[12,"args","","",2,null],[12,"env","","",2,null],[12,"cwd","","",2,null],[3,"MountPoint","","",null,null],[12,"name","","",3,null],[12,"path","","",3,null],[3,"Env","","",null,null],[12,"key","","",4,null],[12,"value","","",4,null],[3,"LinuxUser","","",null,null],[12,"uid","","",5,null],[12,"gid","","",5,null],[12,"additional_gids","","",5,null],[3,"RuntimeSpec","","",null,null],[12,"hooks","","",6,null],[12,"mounts","","",6,null],[12,"linux","","",6,null],[3,"Command","","",null,null],[12,"path","","",7,null],[12,"args","","",7,null],[12,"env","","",7,null],[3,"Mount","","",null,null],[12,"kind","","",8,null],[12,"source","","",8,null],[12,"options","","",8,null],[3,"Hooks","","",null,null],[12,"pre_start","","",9,null],[12,"post_start","","",9,null],[12,"post_stop","","",9,null],[3,"LinuxIdMap","","",null,null],[12,"host_id","","",10,null],[12,"container_id","","",10,null],[12,"size","","",10,null],[3,"LinuxRuntime","","",null,null],[12,"namespaces","","",11,null],[12,"uid_mappings","","",11,null],[12,"gid_mappings","","",11,null],[12,"rootfs_propagation","","",11,null],[12,"devices","","",11,null],[12,"rlimits","","",11,null],[12,"sysctl","","",11,null],[12,"resources","","",11,null],[12,"cgroups_path","","",11,null],[12,"apparmor_profile","","",11,null],[12,"selinux_process_label","","",11,null],[12,"seccomp","","",11,null],[3,"LinuxNamespace","","",null,null],[12,"kind","","",12,null],[12,"path","","",12,null],[4,"Platform","","",null,null],[13,"Linux","","",13,null],[12,"arch","ocf::Platform","",13,null],[12,"capabilities","","",13,null],[4,"Arch","ocf","",null,null],[13,"X86","","",14,null],[13,"X86_64","","",14,null],[13,"ARM","","",14,null],[13,"ARM64","","",14,null],[13,"PowerPC64","","",14,null],[13,"PowerPC64LE","","",14,null],[4,"LinuxCapability","","",null,null],[13,"AuditControl","","",15,null],[13,"AuditRead","","",15,null],[13,"AuditWrite","","",15,null],[13,"BlockSuspend","","",15,null],[13,"Chown","","",15,null],[13,"DacOverride","","",15,null],[13,"DacReadSearch","","",15,null],[13,"FOwner","","",15,null],[13,"FSetID","","",15,null],[13,"IpcLock","","",15,null],[13,"IpcOwner","","",15,null],[13,"Kill","","",15,null],[13,"Lease","","",15,null],[13,"LinuxImmutable","","",15,null],[13,"MacAdmin","","",15,null],[13,"MacOverride","","",15,null],[13,"Mknod","","",15,null],[13,"NetAdmin","","",15,null],[13,"NetBindService","","",15,null],[13,"NetBroadcast","","",15,null],[13,"NetRaw","","",15,null],[13,"SetGID","","",15,null],[13,"SetTFCap","","",15,null],[13,"SetPCap","","",15,null],[13,"SetUID","","",15,null],[13,"SysAdmin","","",15,null],[13,"SysBoot","","",15,null],[13,"SysChroot","","",15,null],[13,"SysModule","","",15,null],[13,"SysNice","","",15,null],[13,"SysPAcct","","",15,null],[13,"SysPTrace","","",15,null],[13,"SysRawIO","","",15,null],[13,"SysResource","","",15,null],[13,"SysTime","","",15,null],[13,"SysTtyConfig","","",15,null],[13,"Syslog","","",15,null],[13,"WakeAlarm","","",15,null],[4,"LinuxNamespaceKind","","",null,null],[13,"PID","","",16,null],[13,"Network","","",16,null],[13,"Mount","","",16,null],[13,"IPC","","",16,null],[13,"UTS","","",16,null],[13,"User","","",16,null],[4,"LinuxMountPropagation","","",null,null],[13,"Slave","","",17,null],[13,"Private","","",17,null],[13,"Shared","","",17,null],[5,"load","","",null,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[5,"version","","",null,{"inputs":[],"output":{"name":"version"}}],[5,"version_req","","",null,{"inputs":[],"output":{"name":"versionreq"}}],[11,"fmt","","",5,{"inputs":[{"name":"linuxuser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"linuxuser"}],"output":{"name":"linuxuser"}}],[11,"deserialize","","",5,{"inputs":[{"name":"linuxuser"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",5,{"inputs":[{"name":"linuxuser"},{"name":"__s"}],"output":{"name":"result"}}],[11,"eq","","",15,{"inputs":[{"name":"linuxcapability"},{"name":"linuxcapability"}],"output":{"name":"bool"}}],[11,"ne","","",15,{"inputs":[{"name":"linuxcapability"},{"name":"linuxcapability"}],"output":{"name":"bool"}}],[11,"fmt","","",15,{"inputs":[{"name":"linuxcapability"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",15,{"inputs":[{"name":"linuxcapability"}],"output":{"name":"linuxcapability"}}],[11,"deserialize","","",15,{"inputs":[{"name":"linuxcapability"},{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",15,{"inputs":[{"name":"linuxcapability"},{"name":"s"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"spec"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"spec"}],"output":{"name":"spec"}}],[11,"fmt","","",1,{"inputs":[{"name":"root"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"root"}],"output":{"name":"root"}}],[11,"deserialize","","",1,{"inputs":[{"name":"root"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",1,{"inputs":[{"name":"root"},{"name":"__s"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"process"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"process"}],"output":{"name":"process"}}],[11,"fmt","","",3,{"inputs":[{"name":"mountpoint"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"mountpoint"}],"output":{"name":"mountpoint"}}],[11,"deserialize","","",3,{"inputs":[{"name":"mountpoint"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",3,{"inputs":[{"name":"mountpoint"},{"name":"__s"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"env"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"env"}],"output":{"name":"env"}}],[11,"fmt","","",13,{"inputs":[{"name":"platform"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"platform"}],"output":{"name":"platform"}}],[11,"eq","","",14,{"inputs":[{"name":"arch"},{"name":"arch"}],"output":{"name":"bool"}}],[11,"ne","","",14,{"inputs":[{"name":"arch"},{"name":"arch"}],"output":{"name":"bool"}}],[11,"fmt","","",14,{"inputs":[{"name":"arch"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",14,{"inputs":[{"name":"arch"}],"output":{"name":"arch"}}],[11,"deserialize","","",14,{"inputs":[{"name":"arch"},{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",14,{"inputs":[{"name":"arch"},{"name":"s"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"env"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",10,{"inputs":[{"name":"linuxidmap"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"linuxidmap"}],"output":{"name":"linuxidmap"}}],[11,"deserialize","","",10,{"inputs":[{"name":"linuxidmap"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",10,{"inputs":[{"name":"linuxidmap"},{"name":"__s"}],"output":{"name":"result"}}],[11,"fmt","","",11,{"inputs":[{"name":"linuxruntime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",11,{"inputs":[{"name":"linuxruntime"}],"output":{"name":"linuxruntime"}}],[11,"deserialize","","",11,{"inputs":[{"name":"linuxruntime"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",11,{"inputs":[{"name":"linuxruntime"},{"name":"__s"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"linuxnamespace"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"linuxnamespace"}],"output":{"name":"linuxnamespace"}}],[11,"deserialize","","",12,{"inputs":[{"name":"linuxnamespace"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",12,{"inputs":[{"name":"linuxnamespace"},{"name":"__s"}],"output":{"name":"result"}}],[11,"eq","","",16,{"inputs":[{"name":"linuxnamespacekind"},{"name":"linuxnamespacekind"}],"output":{"name":"bool"}}],[11,"ne","","",16,{"inputs":[{"name":"linuxnamespacekind"},{"name":"linuxnamespacekind"}],"output":{"name":"bool"}}],[11,"fmt","","",16,{"inputs":[{"name":"linuxnamespacekind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",16,{"inputs":[{"name":"linuxnamespacekind"}],"output":{"name":"linuxnamespacekind"}}],[11,"deserialize","","",16,{"inputs":[{"name":"linuxnamespacekind"},{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",16,{"inputs":[{"name":"linuxnamespacekind"},{"name":"s"}],"output":{"name":"result"}}],[11,"eq","","",17,{"inputs":[{"name":"linuxmountpropagation"},{"name":"linuxmountpropagation"}],"output":{"name":"bool"}}],[11,"ne","","",17,{"inputs":[{"name":"linuxmountpropagation"},{"name":"linuxmountpropagation"}],"output":{"name":"bool"}}],[11,"fmt","","",17,{"inputs":[{"name":"linuxmountpropagation"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",17,{"inputs":[{"name":"linuxmountpropagation"}],"output":{"name":"linuxmountpropagation"}}],[11,"deserialize","","",17,{"inputs":[{"name":"linuxmountpropagation"},{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",17,{"inputs":[{"name":"linuxmountpropagation"},{"name":"s"}],"output":{"name":"result"}}],[11,"default","","",17,{"inputs":[{"name":"linuxmountpropagation"}],"output":{"name":"self"}}],[11,"fmt","","",6,{"inputs":[{"name":"runtimespec"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"runtimespec"}],"output":{"name":"runtimespec"}}],[11,"deserialize","","",6,{"inputs":[{"name":"runtimespec"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",6,{"inputs":[{"name":"runtimespec"},{"name":"__s"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"command"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"command"}],"output":{"name":"command"}}],[11,"deserialize","","",7,{"inputs":[{"name":"command"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",7,{"inputs":[{"name":"command"},{"name":"__s"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"mount"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"mount"}],"output":{"name":"mount"}}],[11,"deserialize","","",8,{"inputs":[{"name":"mount"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",8,{"inputs":[{"name":"mount"},{"name":"__s"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"hooks"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"hooks"}],"output":{"name":"hooks"}}],[11,"deserialize","","",9,{"inputs":[{"name":"hooks"},{"name":"__d"}],"output":{"name":"result"}}],[11,"serialize","","",9,{"inputs":[{"name":"hooks"},{"name":"__s"}],"output":{"name":"result"}}],[11,"from_read","","",0,{"inputs":[{"name":"spec"},{"name":"r"}],"output":{"name":"result"}}],[11,"from_read","","",6,{"inputs":[{"name":"runtimespec"},{"name":"r"}],"output":{"name":"result"}}],[11,"deserialize","","",4,{"inputs":[{"name":"env"},{"name":"d"}],"output":{"name":"result"}}],[11,"deserialize","","",2,{"inputs":[{"name":"process"},{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",2,{"inputs":[{"name":"process"},{"name":"s"}],"output":{"name":"result"}}],[11,"serialize","","",4,{"inputs":[{"name":"env"},{"name":"s"}],"output":{"name":"result"}}],[11,"deserialize","","",0,{"inputs":[{"name":"spec"},{"name":"d"}],"output":{"name":"result"}}],[11,"serialize","","",0,{"inputs":[{"name":"spec"},{"name":"s"}],"output":{"name":"result"}}]],"paths":[[3,"Spec"],[3,"Root"],[3,"Process"],[3,"MountPoint"],[3,"Env"],[3,"LinuxUser"],[3,"RuntimeSpec"],[3,"Command"],[3,"Mount"],[3,"Hooks"],[3,"LinuxIdMap"],[3,"LinuxRuntime"],[3,"LinuxNamespace"],[4,"Platform"],[4,"Arch"],[4,"LinuxCapability"],[4,"LinuxNamespaceKind"],[4,"LinuxMountPropagation"]]};
initSearch(searchIndex);