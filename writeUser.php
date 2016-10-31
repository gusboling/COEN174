<!DOCTYPE html>
<html>
  <?php //PHP helper functions
    function debug_to_console($message){
      echo "<script>";
      echo "console.log(\"$message\")";
      echo "</script>";
    }
  ?>

  <?php
    function read_cff($username_hash){ //Returns an array of class-name strings as read from file.
      $source_file = "data/user_data/" . $username_hash . ".txt";
      $handle = fopen($source_file, "r") or die("Unable to open file for reading! (1)");
      if($handle){
        $file_classes = [];
        while (($line = fgets($handle)) !== false) {
            if($line[0] == '#')
              continue;
            else {
              array_push($file_classes, rtrim($line)); //append line to file_classes array after stripping trailing characters.
            }
        }
        fclose($handle);
        return $file_classes;
      }
      else{
        echo "Unable to open file for reading! (2)";
        return false;
      }
    }

    function write_ctf($username_hash, $class_array){ //Appends an array of class-names to file
      $dest_file = "data/user_data/" . $username_hash . ".txt";
      $handle = fopen($dest_file, "w") or die("Unable to open file for writing! (1)");
      if($handle){
        for($i = 0; $i < count($class_array); $i++){
          $class_data_line = $class_array[$i] . "\n";
          fwrite($handle, $class_data_line);
        }
        return true;
      }
      else{
        return false;
      }
    }
  ?>

  <?php
    //$ajax_data = $_POST['data'];

    //Read function test
    $test_key = "20eabe5d64b0e216796e834f52d61fd0b70332fc";
    $test_array = read_cff($test_key);
    debug_to_console(("Read Array Size: " . count($test_array)));
    //Write function test
    array_push($test_array, "ENGL 181");
    $file_write = write_ctf($test_key, $test_array);
    $result_array = read_cff($test_key);
    debug_to_console(("Read Array Size: " . count($result_array)));


  ?>
</html>
