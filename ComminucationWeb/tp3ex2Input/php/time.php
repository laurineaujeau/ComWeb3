<?php
 $date = getdate();
 $heure;
 $displaydate = "Il est : ".$date["hours"].":".$date["minutes"].":".$date["seconds"];
 $tab = array( $displaydate,array("hours"=>$date["hours"],"minutes"=>$date["minutes"],"seconds"=>$date["seconds"]));
 $json = json_encode($tab);
 echo $json;