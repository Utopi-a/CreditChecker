"use client";

import {
  Button,
  Group,
  Text,
  Collapse,
  Box,
  List,
  ListItem,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function InfoToUse() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box mb={30} maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button
          c={"RGB( 61 , 0 , 0 )"}
          color={"RGB( 254 , 200 , 251 )"}
          onClick={toggle}
        >
          使い方を見る
        </Button>
      </Group>

      <Collapse in={opened}>
        <List type="ordered" c={"RGB( 61 , 0 , 0 )"}>
          <ListItem>
            PC版の
            <Anchor
              href="https://twins.tsukuba.ac.jp/"
              target="_blank"
              c={"RGB( 61 , 0 , 0 )"}
              underline="always"
            >
              Twins
            </Anchor>
            にログイン
          </ListItem>
          <ListItem>成績タブを開く</ListItem>
          <ListItem>ページ一番下の，ダウンロードボタンをクリック</ListItem>
          <ListItem>出力ボタンをクリック</ListItem>
          <ListItem>このサイトに戻る</ListItem>
          <ListItem>「成績表（.csv）をアップロード」ボタンをクリック</ListItem>
          <ListItem>ダウンロードしたファイルを選択</ListItem>
        </List>
        <List c={"RGB( 61 , 0 , 0 )"}>
          <ListItem>取得済み単位数/必要単位数が表示されます</ListItem>
          <ListItem>赤字で表示された科目は単位が足りません</ListItem>
        </List>
      </Collapse>
    </Box>
  );
}
