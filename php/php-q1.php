<php? 
    
$array1 = array('Dan', 'Ron', 'Boris');
$array2 = array('Boris', 'Dan', 'Ruth');

$unique_names = array_unique(array_merge($array1,$array2));
print_r($unique_names);

?>
