"use client";
import { ReactNode } from "react";
import { Text } from "@mantine/core";

export function KamokuTani({
  kamoku,
  data,
  needTani,
  kamokuNo,
}: {
  kamoku: string | ReactNode;
  needTani: number;
  data: any[];
  kamokuNo: RegExp;
}) {
  const regex = new RegExp(kamokuNo);

  let countTani = 0;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]["総合評価"]);
    if (
      data[i]["総合評価"] !== "履修中" &&
      data[i]["総合評価"] !== "F" &&
      data[i]["総合評価"] !== "D" &&
      regex.test(data[i]["科目番号"])
    ) {
      countTani += parseFloat(data[i]["単位数"]);
    }
  }

  return (
    <Text size="18px" m={"10px"}>
      {kamoku} : {countTani} / {needTani}
    </Text>
  );
}
