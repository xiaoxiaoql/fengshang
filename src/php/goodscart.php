<?php
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

	$sql='select * from goods';
	// 查询数据库获取数据
	$result = $conn->query('set names utf8');
	$result = $conn->query($sql);

	//使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>