/*
Navicat MySQL Data Transfer

Source Server         : Jrs
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : jrsname

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-24 15:39:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for jrsname
-- ----------------------------
DROP TABLE IF EXISTS `jrsname`;
CREATE TABLE `jrsname` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `passwords` varchar(255) NOT NULL,
  `txt` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jrsname
-- ----------------------------
INSERT INTO `jrsname` VALUES ('1', '18648939539', '123456', null);
INSERT INTO `jrsname` VALUES ('2', '18645236987', '123456789', null);
INSERT INTO `jrsname` VALUES ('3', '18648939569', '456987', null);
INSERT INTO `jrsname` VALUES ('4', '15874458963', '4569852', null);
INSERT INTO `jrsname` VALUES ('5', '18648939574', '1852369', null);
INSERT INTO `jrsname` VALUES ('6', '13977140273', 'iop123456', null);
INSERT INTO `jrsname` VALUES ('7', '13481173658', 'jkl123456', null);

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `author` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('1', '44556', '阿是打发第三方', '发的萨芬大师傅撒旦法是');
INSERT INTO `news` VALUES ('2', '655645', '按时发顺丰发的方法跟读后感', '电饭锅否定观防守端是的电饭锅是');
INSERT INTO `news` VALUES ('3', '18648939539', '啥的方法', '撒打发撒');
SET FOREIGN_KEY_CHECKS=1;
