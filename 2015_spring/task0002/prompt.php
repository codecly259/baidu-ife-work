<?php
/**
 * Created by PhpStorm.
 * User: maxinchun
 * Date: 2015/12/30
 * Time: 22:10
 */

$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";
$a[] = "Quality";
$a[] = "Quote";
$a[] = "Work";
$a[] = "Review";
$a[] = "Yet";
$a[] = "You";
$a[] = "Zero";
$a[] = "Zip";
$a[] = "Xylophone";
$a[] = "Xylene";
$a[] = "Material";

// 获得来自URL的q的参数
$q = $_GET["q"];
//如果q长度大于0，则查找数组中的所有提示
if (strlen($q)) {
    $hint = "";
    for ($i = 0; $i < count($a); $i++) {
        if (strtolower($q) == strtolower(substr($a[$i], 0, strlen($q)))) {
            if ($hint == "") {
                $hint = $a[$i];
            } else {
                $hint = $hint . " , " . $a[$i];
            }
        }
    }
    //输出响应
    echo $hint;
}



