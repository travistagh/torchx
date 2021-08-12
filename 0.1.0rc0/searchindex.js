Search.setIndex({docnames:["basics","beta","cli","components","components/base","components/distributed","components/hpo","components/serve","components/utils","configure","examples_apps/datapreproc/component","examples_apps/datapreproc/datapreproc","examples_apps/index","examples_apps/lightning_classy_vision/component","examples_apps/lightning_classy_vision/data","examples_apps/lightning_classy_vision/interpret","examples_apps/lightning_classy_vision/model","examples_apps/lightning_classy_vision/train","examples_pipelines/index","examples_pipelines/kfp/advanced_pipeline","examples_pipelines/kfp/dist_pipeline","examples_pipelines/kfp/intro_pipeline","index","pipelines","pipelines/kfp","quickstart","runner","schedulers","schedulers/kubernetes","schedulers/local","schedulers/slurm","specs"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["basics.rst","beta.rst","cli.rst","components.rst","components/base.rst","components/distributed.rst","components/hpo.rst","components/serve.rst","components/utils.rst","configure.rst","examples_apps/datapreproc/component.rst","examples_apps/datapreproc/datapreproc.rst","examples_apps/index.rst","examples_apps/lightning_classy_vision/component.rst","examples_apps/lightning_classy_vision/data.rst","examples_apps/lightning_classy_vision/interpret.rst","examples_apps/lightning_classy_vision/model.rst","examples_apps/lightning_classy_vision/train.rst","examples_pipelines/index.rst","examples_pipelines/kfp/advanced_pipeline.rst","examples_pipelines/kfp/dist_pipeline.rst","examples_pipelines/kfp/intro_pipeline.rst","index.rst","pipelines.rst","pipelines/kfp.rst","quickstart.rst","runner.rst","schedulers.rst","schedulers/kubernetes.rst","schedulers/local.rst","schedulers/slurm.rst","specs.rst"],objects:{"torchx.components":{base:[4,0,0,"-"],dist:[5,0,0,"-"],hpo:[6,0,0,"-"],serve:[7,0,0,"-"],utils:[8,0,0,"-"]},"torchx.components.base":{binary_component:[4,0,0,"-"],roles:[4,0,0,"-"]},"torchx.components.base.binary_component":{binary_component:[4,1,1,""]},"torchx.components.base.roles":{create_torch_dist_role:[4,1,1,""]},"torchx.components.dist":{ddp:[5,1,1,""]},"torchx.components.serve":{torchserve:[7,1,1,""]},"torchx.components.utils":{echo:[8,1,1,""],touch:[8,1,1,""]},"torchx.pipelines":{kfp:[23,0,0,"-"]},"torchx.pipelines.kfp.adapter":{ContainerFactory:[23,2,1,""],component_from_app:[23,1,1,""],component_spec_from_app:[23,1,1,""],container_from_app:[23,1,1,""],resource_from_app:[23,1,1,""]},"torchx.runner":{Runner:[26,2,1,""],get_runner:[26,1,1,""]},"torchx.runner.Runner":{describe:[26,3,1,""],dryrun:[26,3,1,""],list:[26,3,1,""],log_lines:[26,3,1,""],run:[26,3,1,""],run_component:[26,3,1,""],run_opts:[26,3,1,""],schedule:[26,3,1,""],scheduler_backends:[26,3,1,""],status:[26,3,1,""],stop:[26,3,1,""],wait:[26,3,1,""]},"torchx.schedulers":{Scheduler:[27,2,1,""],get_schedulers:[27,1,1,""],kubernetes_scheduler:[28,0,0,"-"],local_scheduler:[29,0,0,"-"],slurm_scheduler:[30,0,0,"-"]},"torchx.schedulers.Scheduler":{cancel:[27,3,1,""],describe:[27,3,1,""],exists:[27,3,1,""],log_iter:[27,3,1,""],run_opts:[27,3,1,""],schedule:[27,3,1,""],submit:[27,3,1,""],submit_dryrun:[27,3,1,""]},"torchx.schedulers.kubernetes_scheduler":{KubernetesScheduler:[28,2,1,""]},"torchx.schedulers.kubernetes_scheduler.KubernetesScheduler":{describe:[28,3,1,""],log_iter:[28,3,1,""],run_opts:[28,3,1,""],schedule:[28,3,1,""]},"torchx.schedulers.local_scheduler":{ImageProvider:[29,2,1,""],LocalDirectoryImageProvider:[29,2,1,""],LocalScheduler:[29,2,1,""]},"torchx.schedulers.local_scheduler.ImageProvider":{fetch:[29,3,1,""],get_command:[29,3,1,""]},"torchx.schedulers.local_scheduler.LocalDirectoryImageProvider":{fetch:[29,3,1,""],get_command:[29,3,1,""]},"torchx.schedulers.local_scheduler.LocalScheduler":{describe:[29,3,1,""],log_iter:[29,3,1,""],run_opts:[29,3,1,""],schedule:[29,3,1,""]},"torchx.schedulers.slurm_scheduler":{SlurmScheduler:[30,2,1,""]},"torchx.schedulers.slurm_scheduler.SlurmScheduler":{describe:[30,3,1,""],schedule:[30,3,1,""]},"torchx.specs":{AppDef:[31,2,1,""],AppState:[31,2,1,""],AppStatus:[31,2,1,""],ReplicaState:[31,4,1,""],Resource:[31,2,1,""],RetryPolicy:[31,2,1,""],Role:[31,2,1,""],RunConfig:[31,2,1,""],get_named_resources:[31,1,1,""],macros:[31,2,1,""],runopts:[31,2,1,""]},"torchx.specs.Resource":{copy:[31,3,1,""]},"torchx.specs.Role":{pre_proc:[31,3,1,""]},"torchx.specs.macros":{Values:[31,2,1,""]},"torchx.specs.macros.Values":{apply:[31,3,1,""],substitute:[31,3,1,""]},"torchx.specs.runopts":{add:[31,3,1,""],is_type:[31,3,1,""],resolve:[31,3,1,""]},torchx:{cli:[2,0,0,"-"],components:[3,0,0,"-"],pipelines:[23,0,0,"-"],runner:[26,0,0,"-"],schedulers:[27,0,0,"-"],specs:[31,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0":[0,2,4,7,10,11,13,14,15,16,17,19,20,21,23,25,26,27,28,29,31],"000":[10,11,13,14,15,16,17,19,20,21],"02":16,"0rc0":7,"1":[0,2,4,5,7,8,9,10,11,13,14,15,16,17,19,23,25,26,27,28,29,31],"10":[26,31],"100":[2,26,29],"1000":[14,17],"1024":[0,11,13,31],"120":28,"122":9,"1234":[28,30],"13":14,"14":16,"16":[9,14],"16xlarg":9,"18":28,"2":[0,2,4,9,15,23,25,31],"200":[10,11],"2000":[11,14],"21":28,"22":28,"24":15,"244":9,"255":14,"3":[2,4,14,15,16,17,20,23,25,27,28,29,31],"32":[9,11,17],"4":[0,4,9,25,31],"4096":16,"488":9,"488gb":9,"5":[4,11,14,15,17,31],"50":[27,28,29],"500":31,"50th":[27,28,29],"6":14,"61":9,"64":[9,14,15,16,31],"64x64":14,"8":[4,9],"8080":31,"8081":[7,19,31],"9":26,"90528d7ca1a48142e341f4ef8d21d0d":[10,11],"9090":31,"abstract":[0,19,27,29],"break":26,"case":[0,2],"class":[4,9,14,16,23,26,27,28,29,30,31],"default":[2,4,11,17,19,25,26,28,30,31],"do":[0,2,9,16,26,29,31],"export":[13,16,17,19],"final":[26,27,28,29,31],"float":[3,26,31],"function":[0,2,3,9,16,20,21,23,26,27,31],"import":[0,2,3,4,7,9,10,11,13,14,15,16,17,19,20,21,23,25,26,28,31],"int":[0,2,3,4,5,8,11,13,14,16,17,25,26,27,28,29,31],"long":[2,26],"new":[0,3,27,28,29,31],"return":[0,3,4,5,7,9,10,11,13,14,15,16,17,19,23,25,26,27,28,29,30,31],"short":26,"static":[19,31],"super":[14,16],"true":[4,11,15,16,17,19,26,27,28,29,31],"try":[0,14,25],"while":[0,26,27,28,29,31],A:[0,4,9,26,31],And:[0,9],As:[0,21],BE:4,But:[0,25],By:2,For:[0,4,9,14,17,19,21,25,26,27,28,29,30,31],If:[0,2,9,17,19,25,26,27,28,29,31],In:[0,2,25],Is:[27,28,29],It:[2,4,9,14,15,16,22,25,26,27,28,29],NOT:[0,2,14,26,31],Not:[3,22,27,28,29,31],One:[0,25],THE:25,TO:25,That:[2,4,25],The:[0,2,3,4,5,7,9,15,19,22,23,25,26,27,28,29,31],Then:9,There:[0,2],These:[4,7,8,19,23,25,31],To:[0,2,14,19,20,21,25,27],With:[0,25],_:[11,14,16],__file__:19,__getitem__:[27,28,29],__init__:[14,16],__main__:[11,15,17],__name__:[11,15,17],_acc:16,_container_op:23,_field_typ:4,_loss:16,_missing_typ:4,_resource_op:23,_step:16,abc:27,about:[0,4,26],abov:[0,2,3,9],absolut:[25,26,29],abstractmethod:27,abus:26,acc_metr:16,accept:[3,31],access:[0,2,27,28,29],accessor:31,accordingli:3,account:30,accur:0,accuraci:[16,26],achiev:0,across:[0,14],act:26,action:[17,26],actual:[0,5,19,26,27,29,31],ad:[0,30],adam:16,adapt:[19,20,21,23,24],add:[11,17,21,25,31],add_argu:[11,15,17,19],addit:[3,25,31],admitt:31,advanc:[0,18,20,21],advanced_pipelin:19,advantag:0,after:[9,15,19],against:31,agent:4,agnost:[0,17],ahead:19,ai:15,aim:7,aivan:16,aka:2,alia:31,alias:9,all:[2,3,9,12,15,18,19,20,21,25,26,27,28,29,30,31],alloc:[19,30,31],allow:[0,2,4,14,19,21,23,31],allow_redirect:11,along:2,alpin:[20,21,28],alreadi:[0,2,22,25,26],also:[0,2,16,25,31],alwai:[2,26,27,28,29],an:[0,2,4,15,16,17,19,20,21,22,24,25,26,27,28,29,30,31],analysi:15,analyz:15,ani:[4,9,23,26,27,28,29,30,31],annot:[3,27],anoth:3,another_arg:4,anti:26,anymor:26,anyth:29,anywher:0,api:[0,2,4,5,7,8,13,19,23,24,26,27,28,29,30,31],apicli:28,app:[0,2,3,9,10,12,13,16,19,20,21,22,23,25,26,27,28,29,30,31],app_arg:[3,25,26],app_def:23,app_handl:[2,26,31],app_id:[2,27,28,29,30,31],app_spec:0,app_statu:26,appdef:[2,3,4,5,7,8,9,10,13,19,20,21,23,25,26,27,28,29,30],appdryruninfo:[26,27,28,29,30,31],append:[11,13,14,15,17,19],appli:[2,4,23,31],applic:[0,2,4,5,7,22,25,26,27,28,29,30,31],appspec:0,appstat:31,appstatu:[26,31],ar:[0,2,3,4,5,8,9,15,17,19,22,23,25,26,27,28,29,30,31],arbitrari:[3,27,28,29,31],archiv:[2,7,16],arcnam:11,arg:[0,2,4,10,11,13,15,17,19,20,21,23,25,29,30,31],argpars:[11,15,17,19,25],argument:[0,2,3,4,5,23,25,26,30,31],argumentpars:[11,15,17,19],argv:[11,15,17,19],around:[2,19,31],arr:15,arrai:15,artifact:31,assembl:23,assert:[11,14,16],assign:31,associ:[9,25],assum:[19,25],assumpt:[0,27,28,29],astyp:14,attempt:2,attr:15,attr_ig:15,attribut:[14,15],author:[0,2,9,25],automat:4,avail:[3,26,27,28,29,31],aw:[0,9],awai:19,axi:15,back:29,backend:[0,2,26,27],bad_typ:31,ball:31,bar:[0,2,4,9,13,25,26],base:[0,2,5,9,13,19,21,22,26,27,28,29,31],base_imag:[2,4,5,31],base_img_root:31,baselin:15,basenam:11,baseop:20,basic:[22,25,27,28,29],batch:[16,17],batch_idx:16,batch_siz:[14,15,17],batchsize_per_replica:14,baz:9,becaus:[0,2,31],been:[26,27,28,29,31],befor:[0,2,19,25,26,31],begin:26,behalf:[2,29],behav:[27,28,29],behavior:[4,23,27,28,29,31],belong:3,below:[0,2,9,25],best:[0,2,9,26],between:[0,4,8,14,22],bin:[0,2,8,20,21,25],binari:[0,4,5,8,25,29],binary_compon:[4,13,19,21],bind:31,blended_heat_map:15,blob:19,block:[2,26,27,28,29],bool:[13,26,27,28,29,31],both:[2,25,26],boto3:0,box:[3,8],breviti:[0,2,25],brows:[0,2,3,25],bucket:[0,7],build:[0,4,31],built:[2,19,21,25,31],builtin:[0,3,9,19,20,21,22,26],bundl:31,byo:25,cach:26,cache_s:29,call:[0,8,9,19,20,21,22,23,25,26,27,28,29],callabl:14,callback:17,caller:[27,28,29],can:[0,2,3,9,14,16,19,20,21,22,23,25,26,27,28,29,30,31],cancel:[26,27,31],cannot:[4,16,29],canon:0,capabl:[2,4,31],captum:15,cat:2,categori:3,caus:15,caveat:31,certain:[26,29],cfg:[26,27,28,29,30,31],cfg_kei:31,chain:[20,21],chanc:22,chang:[2,31],cheap:0,check:[2,16,27,28,29,31],checkout:25,checkpoint:[13,15,17,19],checkpoint_callback:17,checkpoint_path:[15,17],chose:2,chunk:11,chunk_siz:11,chunk_size_byt:11,cifar_torchvision_interpret:15,ckpt:19,class1:14,class1_test_path:14,class1_train_path:14,class1_val_path:14,class2:14,class2_test_path:14,class2_train_path:14,class2_val_path:14,classi:[14,17],classy_dataset:14,classy_vis:14,classydataset:14,classyvis:17,cli:[0,3,9,22,25,30],click:[10,11,13,14,15,16,17,19,20,21],client:[0,2,19,20,21,28],cloud:[14,19],cluster:[0,9,19,20,21,22,28,29,31],cluster_id:31,cmd:31,code:[0,10,11,12,13,14,15,16,17,18,19,20,21,31],cognit:2,collect:[3,25],com:[19,25,28,30],come:[6,22],comma:[2,31],command:[2,29,31],commandlin:[2,31],common:[0,22,31],compar:4,comparison:31,compat:0,compil:[19,20,21,23],complet:[0,26,31],complex:[21,23,25],complianc:26,compon:[4,5,7,8,12,14,20,21,23,24,26],component_from_app:[19,21,23],component_nam:26,component_path:26,component_spec_from_app:23,compos:[11,14],composit:0,compris:9,comput:16,concept:[22,25,31],config:[2,25,26],configur:[4,22,26,27,28,29,31],configure_optim:16,configvalu:31,confirm:28,confus:25,conjunct:29,consid:[2,27,28,29],consist:[3,31],constitut:[27,28,29],construct:[4,26,31],constructor:26,consum:[15,19,26],contain:[0,2,3,4,5,7,9,19,20,21,23,25,26,29,31],container_from_app:[21,23],containerfactori:[19,23],containerop:[0,21,23],context:[0,25],continu:[11,14,15,23],control:[0,4,27,28,29],conveni:[0,2,4,26],convers:21,convert:[0,14,15,20,21,23],convert_to_rgb:15,coordin:[0,31],copi:[4,25,31],core:[21,31],correspond:23,cost:31,could:31,count:29,count_nonzero:15,cp:8,cpu:[0,2,4,9,13,31],crash:[15,31],creat:[0,2,3,4,8,16,22,25,31],create_random_data:[14,17],create_schedul:9,create_torch_dist_rol:4,cross:21,cross_entropi:16,cs231n:[10,11],current:[3,19,23,28],cursor:[26,27,28,29],custom:[2,19,22,25,27,28,29],data:[0,5,10,13,14,15,17,19,31],data_dir:[14,15,17],data_path:[13,14,15,17,19],data_preproc:10,dataclass:[0,4],dataload:[14,15],datapreproc:[4,11,12,15,19],datapreproc_app:19,datapreproc_comp:19,datapreproc_rol:10,dataset:[11,12,16],datetim:[26,27,28,29],ddp:[0,3,5,26],ddp_role:10,deal:[2,19,31],debug:2,deep:9,def:[0,2,9,10,11,13,14,15,16,17,19,20,21,23,25,30,31],default_factori:4,defin:[0,2,3,5,9,14,19,20,21,22,31],definit:[0,3,7,9,10,13,20,21,22,25,27,28,29,31],delimit:[2,25,31],delta:15,demand:31,departur:31,depend:[0,2,17,19,26,27,31],deploi:7,deploy:[23,29],describ:[9,21,26,27,28,29,30],describe_job:2,describeapprespons:[27,28,29,30],descript:[2,3,11,15,17,19,23,27,28,29,30],design:23,dest:11,detail:2,determin:3,dev:31,develop:3,diagram:[0,3],dict:[3,4,5,7,10,13,19,26,27,29,31],dictat:31,did:25,differ:[0,2,3,9,14,29],dim:[15,16],dir:[2,9,25,29],direct:26,directli:[2,19,26,27,28,29,30,31],directori:[3,9,25,29,31],dirnam:19,dirpath:17,disabl:13,disambigu:0,discourag:26,displai:9,dist:[5,20],dist_pipelin:20,distribut:[0,3,4,9,18,21,22,23,26,31],distributed_test:3,doc:[0,3,4,20,23,25,26],docker:[19,25,31],dockerfil:31,document:[25,26,27,28,29,31],doe:[0,2,14,25,26,27,28,29,30,31],doesn:[19,23],don:0,done:[9,25],doubt:2,down:2,download:[10,11,12,13,14,15,16,17,18,19,20,21,29],download_and_extract_zip_arch:11,download_data:[14,15,17],download_fil:0,downstream:26,driver:31,dry:[26,27],dryrun:26,dryrun_info:[26,27,28,29,30,31],dsl:[0,20,21,23],due:15,dure:[16,31],duti:31,dynam:0,e:[0,3,8,9,13,25,26,27,28,29,31],each:[2,3,4,5,19,30,31],easi:[0,14,19],easier:7,easiest:25,echo:[0,2,8,20,21,25,28,30],echo_app:[20,21],echo_c944ffb2:2,echo_contain:[20,21],echo_ecd30f74:2,echo_torchx:0,edu:[10,11],effect:[4,26],effort:0,either:[2,3,27,28,29],elast:4,elastic_train:4,els:[13,17,19],empti:[26,27,28,29],en:[3,20,23],enabl:30,encod:[0,31],encount:31,encourag:[27,28,29,30],end:[26,27,28,29],endpoint:[7,19],enforc:29,ensur:[4,15,17,27],entir:[0,31],entri:[9,26],entry_point:9,entrypoint:[0,2,4,5,9,10,13,19,20,21,25,26,31],enumer:[9,15],env:[2,4,5,10,13,31],env_var:[29,31],environ:[17,31],ep_group_nam:9,ep_nam:9,epoch:[17,19],equival:[23,27,28,29],error:[2,31],especi:0,essenti:[0,2],even:[0,2],eventu:[27,28,29],everyth:[0,2],evict:31,exact:[0,2,27,28,29],exactli:0,exampl:[0,2,4,16,24,25,29,31],example_googl:3,examples_apps_jupyt:12,examples_apps_python:12,examples_imag:19,examples_pipelines_jupyt:18,examples_pipelines_python:18,except:[2,14,27,28,29,30,31],execut:[4,8,19,26,28],exhaust:[27,28,29],exist:[0,11,21,26,27,28,29,30],exit:[2,25,31],expect:[0,27,28,29,30],experi:26,experiment_nam:26,explanatori:2,export_inference_model:[16,17],expos:26,extens:4,extent:[2,26],extra:26,extract:14,extractal:[11,14],f:[0,11,14,15,16,17,19,20,21,25,27,28,29],factor:2,factori:[0,3,4,23,31],fail:[4,26,31],failur:31,fals:[13,14,26,27,28,29,31],familiar:[22,25],far:25,fashion:0,faux:2,fb:16,featur:[0,25,26],fetch:[26,27,28,29],fetcher:2,few:[0,2],field:[0,2,4,27,28,29,31],fig:15,figur:[16,25],file:[0,2,3,7,8,9,13,14,16,19,20,21,25,26,27,28,29,30],file_lint:3,file_path:26,fileexistserror:14,filesystem:[0,19],fill:14,filter:[2,26],find:[0,2,9,22,25],finish:2,first:[15,19,20,21,22,25,26],fit:[0,2,17,22],fix:[0,9],fixm:[14,15,16],flag:17,flexibl:0,flow:0,fname:[11,14],folder:[11,14,16],follow:[0,3,4,9,25,26,27,28,29,31],foo:[0,2,4,9,13,23,25,26,31],foobar:[9,13,25,29,31],form:2,format:[3,23,26],forward:16,found:[2,25],fp:11,framework:0,from:[0,2,3,4,7,9,10,11,13,14,15,16,17,19,20,21,23,25,26,27,28,29,31],fromarrai:14,fs:[0,11,14,16],fsspec:[0,7,11,14,15,16,17,19],full:[2,10,11,13,14,15,16,17,19,20,21,23],fulli:[19,27,28,29],function_nam:26,g:[0,3,8,9,13,25,26,27,28,29,31],galleri:[10,11,12,13,14,15,16,17,18,19,20,21],gang:28,gb:9,gener:[0,10,11,12,13,14,15,16,17,18,19,20,21,23,26,30],get:[2,5,11,14,22,25,26,27,28,29,31],get_command:29,get_filesystem:0,get_fs_token_path:[11,14,16],get_log:2,get_named_resourc:31,get_runn:[0,3,26],get_schedul:27,ghcr:7,github:[19,28],give:31,given:[0,2,7,9,14,26,29,31],global:[11,15,17,19],glue:8,go:26,good:[0,25],gpu:[0,2,4,9,13,31],gpu_x_1:[9,31],gpu_x_2:9,gpu_x_4:9,gpu_x_8:9,gradient:[15,19],granular:0,grayscal:14,group:[5,9,26],guarante:[26,27,28,29,31],gz:[11,14,31],h:[2,25],ha:[0,4,9,15,17,19,20,21,25,26,27,28,29,30,31],had:[9,25],handl:[2,16,26],handler:16,happen:0,hardcod:0,hardwar:31,hash:4,have:[0,2,3,9,11,14,16,19,20,21,23,25,26,27,28,29,31],haven:25,heatmap:15,hello:[0,2,8,20,21,25,28,30],hello_world:[2,31],help:[2,11,15,17,19,25,27,28,29,31],helper:21,henc:31,here:[2,10,11,13,14,15,16,17,19,20,21],heterogen:30,heterogeneous_job:30,high:26,highli:26,hold:31,home:[0,26],homogen:0,honor:[26,27,28,29],hood:0,hook:4,host:[2,26,29,31],how:[0,2,19,20,21,23,25,26,31],howev:[0,27,31],hpo:[0,22],html:[3,7,30],http:[3,7,9,10,11,15,19,20,23,25,26,28,30],human:26,i:[14,15,25],id:[2,25,26,27,31],ideal:0,idempot:27,identifi:[2,5,16,25,27,31],ig:15,ig_:15,ignor:[2,5,15,27,28,29],illeg:31,illustr:3,im:14,imag:[0,2,4,5,7,8,10,11,13,14,15,16,17,19,20,21,23,28,31],image_fetch:2,image_fil:[11,14],image_typ:25,imagefold:14,imagenet:[10,11,12,14],imageprovid:29,img:15,img_root:[11,14,31],img_transform:14,implement:[9,19,25,26,27,28,29,30,31],implementor:[27,28,29,30],implicit:0,includ:[0,2,4,26,31],inclus:4,incur:[2,31],indefinit:26,indic:25,individu:26,infer:[7,16,17,19],info:[15,19,20,21,23,26,30],inform:[0,4,26,31],infra:0,infrastructur:[0,9],init:[4,15,17],initi:[14,17,31],initial_work:19,inlin:[0,21],input:[0,15],input_md5:[10,11],input_path:[0,10,11],input_url:0,insight:2,instal:[20,23,25,28,30,31],instanc:[0,9,19,23,25,27,28,29,31],instanti:[20,21],instead:[2,17,26,31],instruct:[25,28],integ:4,integr:[15,19],integratedgradi:15,intend:[0,21,26,31],interact:7,interest:25,interfac:[0,9,27,28,30],interpret:[12,13,16,19,29,31],interpret_app:19,interpret_comp:19,interrupt:26,interv:26,intro:18,intro_pipelin:21,introduc:0,introductori:21,invalid:[4,31],invers:2,invok:[4,25,31],io:[0,3,7],ipynb:[10,11,13,14,15,16,17,19,20,21],is_image_fil:[11,14],is_termin:26,is_typ:31,isinst:31,islic:15,issu:28,iter:[2,26,27,28,29],iter_cont:11,itertool:15,its:[0,25,26],itself:[25,31],j:25,jit:16,jit_path:16,jite:16,job:[0,3,5,9,20,22,23,25,26,27,28,29,30,31],job_id:2,jobdefinit:0,jobnam:0,join:[0,11,14,15,16,17,19],jpeg:14,json:[2,31],judgment:2,jupyt:[10,11,12,13,14,15,16,17,18,19,20,21],just:[16,19,21,22,25],k1:25,k2:25,k:[2,26,27,28,29],keep:2,kei:[0,31],kfp:[0,19,20,21,24],kill:[27,28,29],know:[19,31],known:[2,8],kubeflow:[0,22,23],kubernet:[0,9,19,20,22,23],kubernetes_schedul:28,kubernetesjob:28,kubernetesschedul:28,kwarg:[4,9,23],l1:16,l:31,label:15,lambda:14,languag:22,larg:2,last:19,later:14,latest:[3,4,13,23,25,28,31],launch:[0,2,4,19,20,21,23,25,26,30,31],launch_kwarg:4,layer:0,layout:5,lead:26,learn:[0,2,9,22,25],least:31,left:26,len:[11,14,16],less:30,let:[2,19,25],level:[0,9,26],leverag:[19,21],librari:[0,3,4,14,17],lightn:[0,14,17],lightning_classy_vis:[13,15,16,17,19],lightning_log:[17,19],lightningdatamodul:14,lightningmodul:16,like:[0,19,21,27,28,29],limit:29,line:[2,9,26,27,28,29],linear:16,lingo:0,list:[0,3,4,11,15,17,25,26,29,31],live:[27,28,29],ll:[0,2,19,25],load:[0,13,14,15,17,19],load_component_from_:23,load_from_checkpoint:[15,17],load_path:[13,15,17,19],loader:14,local:[2,3,5,14,19,25,26,29,30,31],local_runopt:26,local_schedul:29,localdirectoryimageprovid:29,localhost:22,localhostschedul:29,localschedul:29,locat:3,log:[13,16,17,19,26,27,28,29,30],log_dir:[2,25],log_it:[26,27,28,29],log_lin:26,log_path:[13,17,19],logger:17,logic:[0,2,25,31],look:[2,22,25,26],lookup:26,loss:16,lost:[27,28,29],low:26,lowest:9,lr:16,m:[4,31],macro:25,made:31,mai:[0,2,9,26,27,28,29],main:[0,5,11,15,17,31],mainstream:22,maintain:0,make:[0,7,9,17,19,21,25,31],makedir:[14,17],manag:[7,19,29],management_api:[7,19],mani:[0,4,5,26],manner:9,manual:[2,27,28,29],map:[0,4,23,26,31],mappingproxi:4,mar:[16,19],mar_path:16,master:19,matches_regex:26,materi:8,matter:25,matur:0,max:[4,16,31],max_epoch:17,max_restart:4,max_retri:[2,4,31],maximum:4,mb:[11,31],md:19,mean:[0,2,5,15,25],meaning:8,meant:[4,8,17],mechan:[21,31],membership:31,memmb:[0,2,4,9,13,31],messag:[2,8,25,31],metadata:[2,4,19,23,31],method:[0,3,4,15,23,26,27,28,29,30,31],metric:[19,26],mini:0,minimum:26,minit:[11,14],minut:[10,11,13,14,15,16,17,19,20,21],miss:31,ml:[0,22,25,31],mode:[11,14,17,26],model:[7,12,13,14,17,19,23,29],model_accuraci:26,model_jit:16,model_nam:[16,19],model_path:[7,19],modelcheckpoint:17,modif:9,modifi:[19,25,31],modul:[0,2,3,9,14,15,17,23,26,31],monitor:17,more:[0,4,15,19,20,21,23,25,27,28,29,30,31],most:[0,2,9,19,25,31],move:31,msg:[2,8,25,28,30,31],much:[17,26],multi:[5,21,28],multipl:[0,2,4,20,21,27,31],must:[3,4,11,14,15,16,23,26,29,31],mutat:31,my:9,my_app:25,my_compon:26,my_imag:31,my_modul:[9,31],my_project:9,my_train:[2,31],my_train_script:4,my_trainer_spec:2,myschedul:9,n:[2,25],name:[0,2,4,5,7,10,13,16,17,19,20,21,23,25,26,29,31],named_resourc:[9,10,13,31],namespac:[11,15,17,19,28],napoleon:3,ndarrai:15,necessari:31,need:[0,2,14,19,20,21,22,25,26,27,28,29,31],neither:31,net:16,never:[2,14],never_set:31,nevertheless:2,next:19,nn:16,nnode:[0,4,5,13],node:[0,2,4,5,13,21,23,26,31],non:[0,31],none:[2,4,5,7,10,11,13,14,15,16,17,19,20,21,23,26,27,28,29,30,31],nor:31,normal:[11,14],not_exist:29,notabl:23,note:[2,4,26,29,31],notebook:[10,11,12,13,14,15,16,17,18,19,20,21],noth:26,notic:25,notimplementederror:[27,28,29],now:[0,2,19,25],np:15,nproc_per_nod:[4,5,13],null_resourc:4,num_imag:14,num_replica:[0,2,4,8,10,20,23,25,31],num_restart:31,num_sampl:[14,17],number:[4,5,8,13,17,25,31],numer:2,numpi:[14,15],obj:31,object:[0,2,4,7,14,19,23,26,27,31],obtain:2,occur:31,omit:[0,2,25],onc:[9,19,20,21,22],one:[0,2,3,5,19,21,22,25,26,31],onli:[0,2,3,9,17,19,20,21,23,27,28,29,31],onto:[0,2],open:[0,11,14,15,19,20,21],oper:[8,20,23],opt:31,optim:16,option:[2,3,4,5,7,10,13,14,19,23,25,26,27,28,29,30,31],order:[26,31],org:[7,9,23,26],organ:[3,9],origin:31,os:[11,14,15,16,17,19],oss:[0,16,17],other:[0,2,4,14,19,26,27,28,29],otherwis:[15,26,27,28,29,31],our:[3,14,15,17,19,20,21,22,25],ourselv:25,out:[2,3,8,11,16,25,26,30,31],out_path:[15,16],output:[11,13,15,16,17,19,23,26,27,28,29],output_path:[10,11,13,14,15,17,19],over:[0,4,26,27,28,29],overhead:2,overlai:[4,15,31],overlap:[9,25],overrid:26,overwrit:26,own:[0,2,19],p3:9,pack:[11,14],packag:[9,19,25,26],package_path:[19,20,21,23],page:3,pair:2,parallel:[0,5,19,25,31],param1:3,param2:3,param:[7,19],paramet:[0,2,4,5,7,8,16,23,25,26,27,28,29,31],parameter:0,pars:[26,31],parse_accuraci:26,parse_arg:[11,15,17,19],parser:[11,15,17,19],part:[21,23,24,26,31],partial:26,particular:[2,31],particularli:9,partit:31,pass:[0,2,14,23,26,30,31],past:[25,26],path:[0,2,7,11,13,14,15,16,17,19,25,26,29,31],pattern:[2,26],pend:31,per:[5,13],perform:31,perman:0,persist:26,physic:31,pick:25,pil:[11,14],pip:[25,28],pipelin:[2,25],pipeline_func:[19,20,21,23],pixel:14,pl:[14,16,17],place:[2,14,15,17,19],plan:25,platform:[0,21,22,25],pleas:[2,17,27,31],plug:0,plugin:9,png:15,point:[0,2,4,9,25,26,27,28,29],pointer:0,polici:[4,29,31],poll:26,popen:2,popenrequest:[2,29],popul:31,port:[4,31],port_map:[2,4,23,31],portabl:0,posix:2,possibl:[0,9,21,26,27,28,29,31],practic:25,pre:25,pre_proc:31,predefin:[0,9],preemptibl:31,preemption:31,prefer:[29,31],prefix:[2,25],preproc:10,preprocess:[14,15],preprocessor:19,present:31,pretrain:13,pretti:[3,26],previou:[19,25,31],pri:26,primit:[3,31],primitive_kei:3,primitive_valu:3,print:[2,11,14,15,16,17,19,20,21,23,26,31],prior:[27,28,29],prioriti:[25,31],proceed:25,process:[2,4,5,13,15,27,29],process_imag:14,prod:31,produc:[19,23,27,28,29],product:29,programmat:0,progress:[27,28,29,31],project:9,project_root:9,proper:0,properli:2,properti:[3,29],protip:0,protocol:23,provid:[0,2,4,7,19,23,24,25,26,31],proxi:4,ps:31,pt:[7,16],pull:[2,29,31],pure:0,purg:[26,27,28,29],purpos:[0,3,15,19],put:[2,11,16],py:[0,2,3,4,9,10,11,13,14,15,16,17,19,20,21,25,26,31],pyre:[14,15,16],python3:4,python:[0,2,4,9,10,11,12,13,14,15,16,17,18,19,20,21,25,26],pytorch:[0,4,7,14,17,19,22,28,31],pytorch_lightn:[0,14,16,17],qualifi:[27,28,29],queue:[20,23,26,28],quick:[14,25],quickli:[2,23],quickstart:[4,22],r:[11,14],rais:[17,26,27,28,29],raise_for_statu:11,ram:31,rand:14,rand_image_:14,random:14,randomli:[14,17],rang:[14,27,28,29],rank:[2,26],rather:[0,2,25,26,27,28,29,30],raw:[26,31],rb:0,re:[19,31],reach:[27,28,29,31],read:[14,19,20,21,25,27,28,29,31],readabl:26,readi:[0,8],readm:19,readthedoc:3,real:[25,29],reason:26,rebuild:19,recent:31,recommend:[0,26],reconstruct:26,record:[26,27,28,29],recreat:2,recurs:9,refer:[0,2,3,9,24,25,27,28,29,31],referenc:25,regard:27,regex:[2,26,27,28,29],regist:[2,7,26,31],registr:[9,31],registri:9,regress:16,regular:25,rel:[25,26],relat:22,relev:[9,29],reli:2,relu:16,remot:[11,14,19,25],remote_path:[14,16],remov:[11,26],repetit:0,replac:31,replica:[2,4,5,8,23,25,26,27,28,29,30,31],replica_id:[2,25,31],replicaparam:2,replicast:31,report:26,repr:4,repres:[0,3,22,23,31],represent:[0,9],request:[2,4,11,26,27,31],requir:[0,5,11,15,17,19,25,28,29,31],resolut:26,resolv:[26,31],resourc:[0,2,4,5,10,13,20,23,29,30],resource_from_app:[20,23],resourceop:23,respons:[4,19,31],rest:0,restart:[4,31],result:[2,4,15,19,23],retain:2,retent:[2,27,28,29],retri:[4,29,31],retriev:[26,31],retry_polici:[2,4,31],retrypolici:[2,4,31],return_convergence_delta:15,reupload:11,reus:14,rewritten:0,rgb:14,rm:11,role:[0,2,4,5,9,10,20,23,25,26,27,28,29,30],role_log_dir:2,role_nam:[2,26,27,28,29],role_param:2,rolestatu:31,root:[7,11,14,31],rpath:[11,14,16],rt:[19,20,21],run:[0,3,4,5,8,9,10,11,13,14,15,16,17,19,20,21,22,23,24,26,27,28,29,30],run_as_us:31,run_compon:[3,26],run_config:2,run_config_opt:31,run_opt:[2,26,27,28,29],runconfig:[26,27,29,31],runner:[2,3,22,23,25],runopt:[2,25,26,27,28,29,31],runtim:[17,23,31],s3:[0,7,19,31],s3_input_path:0,s:[2,3,4,9,14,16,17,19,22,25,26,27,28,29,30,31],safe:27,same:[2,16,19,27,28,29,30,31],save:[11,13,14,15,16,17,31],save_dir:17,save_last:17,savefig:15,sbatch:30,scale:4,sched_nam:[2,9,25],schedmd:30,schedul:[3,4,5,19,20,23,26,28,29,30,31],scheduler_arg:[2,25,28],scheduler_backend:26,scheduler_nam:2,scheduler_param:[26,27],scratch:0,script:[4,5,10,11,13,14,15,16,17,19,20,21,30],script_arg:[0,4,5],sdk:[3,20,21,22,23],second:[10,11,13,14,15,16,17,19,20,21],section:[0,5,25,31],see:[0,2,4,7,9,15,19,20,21,23,24,25,26,28,30,31],seek:[27,28,29],seen:2,select:31,self:[2,14,16,27,28,29,30],semant:[0,26,27],separ:[19,21],seri:15,serial:[16,31],serv:[19,22],serve_app:19,serve_comp:19,server:[2,31],servic:[19,27],session:[0,26,29,31],session_nam:[9,27,28,29,30],set:[2,4,5,9,17,19,20,25,29,31],set_tti:19,setup:[2,9,14,15,17,19,25],setuptool:9,sever:22,sh:[20,23,25,28],shell:30,shirt:9,should:[0,2,3,9,19,20,21,26,27,28,29,31],should_tail:[26,27,28,29],show:[2,19,23,25],show_colorbar:15,shown:[2,25],shuffl:14,side:2,sign:15,signatur:9,similar:[0,3,31],simpl:[0,2,11,16,19,25,31],simple_exampl:2,simpli:[0,2,3,5,8,25],simul:2,sinc:[0,2,4,23,25,26,27,28,29,30,31],singl:[0,4,11,14,16,21,23,31],single_gpu:0,size:[9,15,16,17,31],skip:[0,15],skip_export:[13,17],sleep:26,slurm:22,slurm_schedul:30,slurmbatchrequest:30,slurmschedul:30,smaller:17,so:[2,14,19,22,23,25,27,28,29],softwar:31,some:[0,2,11,19,27,28,29],someth:[19,23],sometim:15,soon:[6,22,26],sourc:[4,5,7,8,10,11,12,13,14,15,16,17,18,19,20,21,23,26,27,28,29,30,31],sparingli:[26,29],spec:[0,2,3,4,5,7,8,9,10,13,19,20,21,22,23,25,26,27,28,29,30],specif:[0,2,9,21,23,25,26,27,28,29,31],specifi:[0,2,9,14,19,25,26,27,28,29,30,31],sphinx:[10,11,12,13,14,15,16,17,18,19,20,21],sphinxcontrib:3,split:0,splitext:11,spot:[2,31],squeez:15,stack:15,stage:[0,8,14,22],standalon:[0,16,22],standard:[17,19,21,22],stanford:[10,11],start:[22,25,26,31],stat:15,state:[26,27,28,29,31],statu:[26,28,30],status:31,stderr:[2,27,28,29],stdout:[2,8,25,27,28,29],step:[3,19,21,31],step_nam:16,still:2,stock:14,stop:[26,31],stopiter:[27,28,29],storag:[0,2,14,19],store:[0,19],store_tru:17,str:[0,2,3,4,5,7,8,9,10,11,13,14,15,16,17,19,23,25,26,27,28,29,30,31],straightforward:3,stream:11,string:[2,9,25,31],struct:[0,22],structur:[3,9],structured_error_msg:31,stuck:[27,28,29],style:[0,4,5],sub:[0,26],subcommand:[2,25],submit:[0,2,26,27,28,29,30,31],submit_dryrun:[27,28,29,30,31],subprocess:[2,16],substitut:31,succeed:31,successfulli:[26,29,31],support:[0,3,4,9,23,25,26,27,28,29,31],sure:19,surviv:31,svc:19,sy:[11,15,17,19],syntax:21,system:0,t1:10,t:[0,9,16,19,23,25],tail:[2,27,28,29],take:[0,2,5,19,20,21,22,23,25,27,28,29,30],tar:[11,14,31],tar_path:[11,14],tarfil:[11,14],target:[0,15],tax:2,tcp_store:31,team:9,teardown:14,technic:2,temp_fil:11,tempfil:[11,15,17],templat:31,templet:[0,3],temporarydirectori:[11,15,17],tensor:[15,16],tensorboard:[13,17,19,31],tensorboardlogg:17,term:26,termin:[26,27,28,29,31],test:[3,9,14,15,17,20,23,25,28],test_app:9,test_d:14,test_dataload:[14,15],test_nam:5,test_path:14,text:31,th:[26,27,28,29],than:[0,25,26,27,28,29,30,31],thei:[0,5,9,26,27,28,29,31],them:[0,2,3,14,15,19,20,23,30,31],thi:[0,2,3,5,9,10,11,13,14,15,16,17,19,20,21,23,25,26,27,28,29,30,31],thing:[2,25],think:[0,3],those:[0,23,27],thread:[27,31],three:2,through:[0,2,9,23,25,31],thu:31,time:[0,2,4,10,11,13,14,15,16,17,19,20,21,25,27,28,29],timeout:[27,28,29],tini:[10,11,12,14],tiny_image_net:[16,19],tinyimagenetdatamodul:[14,15,17],tinyimagenetdataset:14,tinyimagenetmodel:[15,16,17],titl:15,tmp:[0,2,8,17,19,23,25,29],tmpdir:[11,14,15,16,17],todo:16,togeth:[2,20,21,30],toi:[15,16],tool:[0,2,7,30,31],top:0,topilimag:[11,14],topolog:[0,5],torch:[0,4,9,14,15,16,31],torch_dist_rol:[9,31],torchelast:4,torchelastic_error_fil:2,torchmetr:16,torchscript:16,torchserv:[7,16,19],torchvis:[11,14],torchx:[0,2,4,5,7,8,9,10,11,13,15,17,19,20,21,24,25,28,29,30],torchx_:2,torchx_asmtmyqj:2,torchx_imag:19,torchx_kiuk:2,torchx_us:[28,30],total:[10,11,13,14,15,16,17,19,20,21,26],totensor:[11,14],touch:[0,2,8,25],tp:31,tqdm:[11,14],track:[19,28],train:[9,13,14,15,16,17,19],train_acc:16,train_app:31,train_d:14,train_dataload:14,train_loss:17,train_path:14,trainer:[0,2,4,9,15,19,23,26,31],trainer_app:19,trainer_comp:19,training_step:16,transform:[11,14,19,23],translat:2,travers:9,tri:[0,21,25],trivial:[27,28,29,30,31],tupl:[16,23],tutori:[8,15],twice:[27,28,29],two:[0,9,25],txt:[9,31],type:[0,2,3,4,5,7,9,10,11,13,14,15,16,17,19,25,27,31],type_:31,typic:[0,19,20,21,29,31],uber:31,ubuntu:25,ui:[19,20,21,23],ui_metadata:[19,23],ui_url:31,uint8:14,uml:0,unblock:26,undefin:[4,27,28,29],under:[0,2],underli:[27,28,29],understand:[0,21,23,25],understood:[0,2],unextract:14,union:[26,31],uniqu:[27,30,31],unit:3,unknown:31,unknownappexcept:26,unlik:[0,25],unspecifi:23,unsubmit:31,unsuccess:31,unsuccessfulli:31,until:[0,26,27,28,29],untouch:31,up:[0,4,19,23,26,29,31],upload:[11,16,19,20,21],upon:[26,31],upstream:0,url:[2,7,11,31],us:[0,2,3,4,7,8,9,13,14,15,16,17,19,20,21,22,23,25,26,27,28,29,30,31],usag:[2,25,26,31],user:[0,2,4,9,26,29,31],util:[0,2,14,22,25,28,30],v1:[25,28],v2:25,v:2,val:[14,16],val_acc:16,val_batch:16,val_d:14,val_dataload:14,val_path:14,valid:[3,25,26,31],validation_step:16,valu:[25,31],valuabl:2,valueerror:[17,26,29],vari:[0,19],variabl:[4,5,13,31],varieti:0,variou:0,vcpu:9,ve:25,veri:[2,16],version:[4,16,17,19,25,28],via:[3,4,9,11,14,19,20,21,26,27,28,29,30,31],view:16,viewer:23,vision:[14,17],visual:15,visualize_image_attr:15,viz:15,volcano:[20,23,28],vs:31,w:11,wa:[2,26,27,31],wai:[0,9,25,31],wait:[26,27],wait_interv:26,walk:[11,14],want:[0,2,9,25,31],wb:[11,15],we:[0,3,14,19,20,21,25],weight:15,well:[2,3,8,23],were:[0,2,26],what:[0,3,19,25,26,27,28,29,31],whatev:0,when:[0,2,4,5,9,23,26,27,28,29,31],where:[19,23,25],wherev:21,whether:2,which:[0,2,4,14,17,23,25,27,28,29,31],who:31,why:[16,23],within:[5,19,26,27,31],without:[2,26,31],work:[20,28,29,31],worker:[0,4,5,19],workflow:[0,2,8,14,22],world:[0,8,25],would:[0,25,26,27],wrapper:2,write:[0,2,3,11,14,22,31],written:[0,30],www:23,x:[14,16],y:16,y_pred:16,yaml:[0,19,20,21,23],yet:31,you:[0,2,3,9,17,19,20,21,22,23,25,31],your:[0,2,7,9,16,17,19,20,21,22,26,31],yourself:25,zero:[0,15,31],zero_grad:15,zip:[10,11,12,18],zip_ref:11,zipfil:11},titles:["Basics","Coming Soon","CLI","torchx.components","Base","Distributed","HPO","Serve","Utils","Configuring","Datapreproc Component Example","Data Preprocessing App Example","Application Examples","Trainer Component Example","Trainer Datasets Example","Model Interpretability App Example","Tiny ImageNet Model","Trainer App Example","Pipelines Examples","Advanced KubeFlow Pipelines Example","Distributed KubeFlow Pipelines Example","Intro KubeFlow Pipelines Example","TorchX","torchx.pipelines","Kubeflow Pipelines","Quickstart","torchx.runner","torchx.schedulers","Kubernetes","Localhost","Slurm","torchx.specs"],titleterms:{On:25,With:22,adapt:[0,22],advanc:19,api:22,app:[11,15,17],appdef:[0,31],applic:12,argument:19,base:4,basic:0,beta:22,builtin:[2,25],classi:12,cli:2,come:1,compon:[0,2,3,9,10,13,19,22,25],concept:0,config:31,configur:9,creat:19,custom:9,data:[11,12],datapreproc:10,dataset:14,defin:25,definit:19,describ:2,distribut:[5,20],document:22,dryrun:2,exampl:[10,11,12,13,14,15,17,18,19,20,21,22],experiment:22,featur:22,hpo:6,imag:[25,29],imagenet:16,input:19,inspect:2,interpret:15,intro:21,job:2,kfp:23,kubeflow:[18,19,20,21,24],kubernet:28,librari:22,lightn:12,list:2,localhost:29,log:2,macro:31,model:[15,16],name:9,next:25,other:25,own:25,pipelin:[0,18,19,20,21,22,23,24],preprocess:[11,12],project:0,provid:29,queri:2,quickstart:25,regist:9,resourc:[9,31],role:31,run:[2,25,31],runner:[0,26],runtim:0,schedul:[0,2,9,22,25,27],serv:7,slurm:30,soon:1,spec:31,statu:[2,31],step:25,structur:0,support:2,tini:16,torchx:[3,22,23,26,27,31],trainer:[12,13,14,17],usag:22,util:8,view:2,vision:12,what:2,work:22,your:25}})