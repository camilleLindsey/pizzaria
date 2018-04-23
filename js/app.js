




// java start a
<script type="text/javascript">jQuery(function($) { 
tvc_lc="USD";
homepage_json_ATC_link=[];
tvc_fp=[];
tvc_rcp=[];
tvc_rdp=[];
prodpage_json_ATC_link=[];
tvc_pgc=[]; 
catpage_json_ATC_link=[];
    
var items = [];
                               
 //default quantity 1 if quantity box is not there             
if(t_qty=="" || t_qty===undefined){
t_qty="1";
}
t_call_fired=prod_ATC_link_exists(t_url,homepage_json_ATC_link,tvc_fp,t_qty);
if(!t_call_fired){
prod_ATC_link_exists(t_url,homepage_json_ATC_link,tvc_rcp,t_qty);
}
});   
tvc_smd={"tvc_wcv":"3.3.4","tvc_wpv":"4.9.5","tvc_eev":"2.0.0","tvc_cnf":{"t_ee":"yes","t_df":false,"t_gUser":false,"t_UAen":"no","t_thr":"6"}};
});</script> 
// java end b