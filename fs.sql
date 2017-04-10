/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : fs

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 17:50:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cartlist
-- ----------------------------
DROP TABLE IF EXISTS `cartlist`;
CREATE TABLE `cartlist` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `idx` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cartlist
-- ----------------------------
INSERT INTO `cartlist` VALUES ('68', '004');
INSERT INTO `cartlist` VALUES ('67', '002');
INSERT INTO `cartlist` VALUES ('69', '003');
INSERT INTO `cartlist` VALUES ('70', '007');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(200) unsigned NOT NULL AUTO_INCREMENT,
  `idx` varchar(255) NOT NULL,
  `style` varchar(200) NOT NULL,
  `price` varchar(30) NOT NULL,
  `url` varchar(100) NOT NULL,
  `color` varchar(100) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `brand` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('6', '001', '家居生活', '199.00', '001-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('7', '002', '家居生活', '100.00', '002-1.jpg', null, null, '自动拧水魔术平板拖', '宝家洁');
INSERT INTO `goods` VALUES ('8', '003', '家居生活', '99.00', '003-1.jpg', null, null, '鹅绒被反反季喵杀组', '韩丝慕');
INSERT INTO `goods` VALUES ('9', '004', '家居生活', '999.00', '004-1.jpg', null, null, '活性炭滤芯', '水立方');
INSERT INTO `goods` VALUES ('10', '005', '家居生活', '333.00', '005-1.jpg', '', '', '粉色佳人柔棉提花夏被1.8M ', '薇依');
INSERT INTO `goods` VALUES ('11', '006', '家居生活', '333.00', '006-1.jpg', '', '', '粉色佳人柔棉提花夏被1.8M ', '薇依');
INSERT INTO `goods` VALUES ('12', '007', '家居生活', '333.00', '007-1.jpg', '', '', '粉色佳人柔棉提花夏被1.8M ', '薇依');
INSERT INTO `goods` VALUES ('13', '008', '家居生活', '999.00', '008-1.jpg', null, null, '活性炭滤芯', '水立方');
INSERT INTO `goods` VALUES ('14', '009', '家居生活', '199.00', '009-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('15', '010', '家居生活', '199.00', '010-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('16', '011', '家居生活', '199.00', '011-1.jpg', null, null, '浮雕防水地板家装特供组', '蒂诺');
INSERT INTO `goods` VALUES ('17', '012', '数码家电', '999.00', '012-1.jpg', null, null, '408升豪华四开门冰箱', '韩电');
INSERT INTO `goods` VALUES ('18', '013', '数码家电', '11329.00', '013-1.jpg', null, null, '43英寸安卓智能电视', '东芝');
INSERT INTO `goods` VALUES ('19', '014', '食品健康', '199.00', '014-1.jpg', null, null, '关节活素', '宫诺');
INSERT INTO `goods` VALUES ('20', '015', '美容美发', '199.00', '015-1.jpg', null, null, '靓白淡斑全明星回馈组', '蔻缇');
INSERT INTO `goods` VALUES ('21', '016', '食品健康', '59.00', '016-1.jpg', null, null, '庄新疆红葡萄干', '西域绿庄');
INSERT INTO `goods` VALUES ('22', '017', '家居生活', '199.00', '017-1.jpg', null, null, '浮雕防水地板家装特供组', '百年工匠');
INSERT INTO `goods` VALUES ('23', '018', '家居生活', '199.00', '018-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('24', '019', '家居生活', '199.00', '019-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('25', '020', '家居生活', '199.00', '020-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('26', '021', '家居生活', '199.00', '021-1.jpg', null, null, '浮雕防水地板家装特供组', '哲京');
INSERT INTO `goods` VALUES ('27', '022', '家居生活', '199.00', '022-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('28', '023', '家居生活', '199.00', '023-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('29', '024', '家居生活', '199.00', '024-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('30', '025', '家居生活', '199.00', '025-1.jpg', null, null, '浮雕防水地板家装特供组', '白玉兰');
INSERT INTO `goods` VALUES ('31', '026', '家居生活', '199.00', '026-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('32', '027', '家居生活', '199.00', '027-1.jpg', null, null, '浮雕防水地板家装特供组', '妙煮妇');
INSERT INTO `goods` VALUES ('33', '028', '家居生活', '199.00', '028-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('34', '029', '家居生活', '199.00', '029-1.jpg', null, null, '浮雕防水地板家装特供组', '邦德');
INSERT INTO `goods` VALUES ('35', '030', '家居生活', '199.00', '030-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('36', '031', '家居生活', '199.00', '031-1.jpg', null, null, '浮雕防水地板家装特供组', '二黑');
INSERT INTO `goods` VALUES ('37', '032', '家居生活', '199.00', '032-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('38', '033', '家居生活', '2179.00', '033-1.jpg', null, null, '浮雕防水地板家装特供组', '依依');
INSERT INTO `goods` VALUES ('39', '034', '家居生活', '199.00', '034-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('40', '035', '家居生活', '199.00', '035-1.jpg', null, null, '浮雕防水地板家装特供组', '大黄');
INSERT INTO `goods` VALUES ('41', '036', '家居生活', '199.00', '036-1.jpg', null, null, '浮雕防水地板家装特供组', '韩丝');
INSERT INTO `goods` VALUES ('42', '037', '家居生活', '399.00', '037-1.jpg', null, null, '浮雕防水地板家装特供组', '追梦者');
INSERT INTO `goods` VALUES ('43', '038', '家居生活', '199.00', '038-1.jpg', null, null, '浮雕防水地板家装特供组', '格林美');
INSERT INTO `goods` VALUES ('44', '039', '家居生活', '133.00', '039-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('45', '040', '家居生活', '199.00', '040-1.jpg', null, null, '浮雕防水地板家装特供组', '万宝格');
INSERT INTO `goods` VALUES ('46', '041', '家居生活', '189.00', '041-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('47', '042', '家居生活', '199.00', '042-1.jpg', null, null, '浮雕防水地板家装特供组', '贝微美');
INSERT INTO `goods` VALUES ('48', '043', '家居生活', '139.00', '043-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('49', '044', '家居生活', '199.00', '044-1.jpg', null, null, '浮雕防水地板家装特供组', '大黑');
INSERT INTO `goods` VALUES ('50', '045', '家居生活', '109.00', '045-1.jpg', null, null, '浮雕防水地板家装特供组', '花花');
INSERT INTO `goods` VALUES ('51', '046', '家居生活', '199.00', '046-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('52', '047', '家居生活', '119.00', '047-1.jpg', null, null, '浮雕防水地板家装特供组', '金三角');
INSERT INTO `goods` VALUES ('53', '048', '家居生活', '129.00', '048-1.jpg', null, null, '英伦风长版上衣', '小余儿');
INSERT INTO `goods` VALUES ('54', '049', '家居生活', '199.00', '049-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('55', '050', '家居生活', '199.00', '050-1.jpg', null, null, '浮雕防水地板家装特供组', '韩丝');
INSERT INTO `goods` VALUES ('56', '051', '家居生活', '199.00', '051-1.jpg', null, null, '浮雕防水地板家装特供组', 'CLARA');
INSERT INTO `goods` VALUES ('57', '052', '家居生活', '199.00', '052-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('58', '053', '家居生活', '199.00', '053-1.jpg', null, null, '浮雕防水地板家装特供组', '童心');
INSERT INTO `goods` VALUES ('59', '054', '家居生活', '199.00', '054-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');
INSERT INTO `goods` VALUES ('60', '055', '家居生活', '199.00', '055-1.jpg', null, null, '浮雕防水地板家装特供组', '芯啓源');
INSERT INTO `goods` VALUES ('61', '056', '家居生活', '199.00', '056-1.jpg', null, null, '浮雕防水地板家装特供组', '朗益');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('32', '15270019584', '123456');
INSERT INTO `user` VALUES ('33', '15270019584', '123456');
SET FOREIGN_KEY_CHECKS=1;
