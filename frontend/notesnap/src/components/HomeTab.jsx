import { Card } from "antd";
import "../styles/HomeTab.css";
import { Flex } from "antd";

export default function HomeTab() {
  return (
    <Flex vertical gap="1em">
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
      <Card className="post-card"></Card>
    </Flex>
  );
}
