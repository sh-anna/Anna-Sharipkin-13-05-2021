<?php
#Array Sum
    function  prependSum (array &$array)  :  int
    {
          $sum = array_sum( $array ) ;
          array_unshift($array, $sum) ;
          return $sum;     
    }
    $array = array (1 , 2, 3 ) ;
    $myAnswer = prependSum($array);
    foreach($array as $array_item){
    echo $array_item;
   }

   
    
