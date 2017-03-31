<?php
	$name=isset($_POST['username'])?$_POST['username']:'';
	$pasw=isset($_POST['pasw'])?$_POST['pasw']:'';
	// $obj=array('username'=>$username,'pasw'=>$pasw);
	$servername='localhost';
	$username='root';
	$password='';
	$dbname='fs';

	// 创建连接
	$conn = new mysqli($servername, $username, $password, $dbname);

	// 检测连接
	if ($conn->connect_error) {
	    die("连接失败: " . $conn->connect_error);
	} 


	// 查询数据
	$sql = 'select username,password from user';


	// 查询数据库获取数据
	$result = $conn->query($sql);



	//使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);
	for($i=0;$i<count($row);$i++){
		if($row[$i]['password']===$name && $row[$i]['username']===$pasw){
			echo json_encode('ok');

		}else{
			echo json_encode('no');
		}
	};

	// echo json_encode($row);

?>