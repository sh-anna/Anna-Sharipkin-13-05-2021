#Filter
     <?php

     function  filterNumbersFromArray (array &$arr)  :  void
     {
            //Write the code that goes here
            foreach($arr as $value) {
              if (!is_numeric($value)) {
                     unset($arr[$key]);
              } 
         }
     }
 
     $arr = [1,  ‘a’ ,  ‘b’ ,  2]
     filterNumbersFromArray ($arr) ;
      print_r ( array_values ( $arr ) ) ;
