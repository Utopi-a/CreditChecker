"use client";

import React, { useState } from "react";
import Papa from "papaparse";
import { Button, Text, FileButton, Code, Title } from "@mantine/core";
import { KamokuTani } from "../app/components/KamokuTani";

export default function CSVUpload() {
  const [data, setData] = useState<unknown[]>([]);
  const handleFileUpload = (file: File) => {
    Papa.parse(file, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  console.log(data);

  return (
    <>
      <FileButton
        accept=".csv"
        onChange={(file: File | null) => handleFileUpload(file as File)}
      >
        {(props) => <Button {...props}>成績表（.csv）をアップロード</Button>}
      </FileButton>
      {data && (
        <>
          <KamokuTani
            kamoku={"総単位数"}
            needTani={124}
            data={data}
            kamokuNo={/.*/}
          ></KamokuTani>
          <Title order={2}>専門科目</Title>
          <Title order={3}>必修科目</Title>
          <KamokuTani
            kamoku={"専門語学（英語）B1"}
            needTani={1}
            data={data}
            kamokuNo={/EB13612|EB13012/}
          ></KamokuTani>
          <KamokuTani
            kamoku={"専門語学（英語）B2"}
            needTani={1}
            data={data}
            kamokuNo={/EB13622|EB13022/}
          ></KamokuTani>
          <KamokuTani
            kamoku={"専門語学（英語）B3"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"科学コミュニケーション"}
            needTani={2}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"専門語学（英語）D1"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"専門語学（英語）D2"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"専門語学（英語）D3"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"生物学演習"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"生物学研究法"}
            needTani={6}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"卒業研究"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"論文作成・プレゼンテーション"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <Title order={3}>選択科目</Title>
          <KamokuTani
            kamoku={
              <>
                科目番号がEB15からEB99で始まる科目
                <br />
                生物物理科学
                <br />
                科目番号がEC2(EC24を除く)，EC3(EC34を除く)，EE(EE21，EE5を除く)，EG5，EG6，EG9，FA，FC，FE，FF4，FF5，FG12，FG22，FG32，FG4，FG52，G，HB，HEで始まる科目のうちから学類長が指定するもの
                <br />
                その他学類長が専門科目選択として特に指定する科目
              </>
            }
            needTani={40}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"所属するコースに対応して指定された科目"}
            needTani={8}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"所属するコースに対応して指定された科目以外の科目"}
            needTani={8}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <Title order={2}>専門基礎科目</Title>
          <Title order={3}>必修科目</Title>
          <KamokuTani
            kamoku={"系統分類・進化学概論"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"遺伝学概論"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"生態学概論"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"動物生理学概論"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"植物生理学概論"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"基礎生物学実験"}
            needTani={3}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"専門語学（英語）A1"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"専門語学（英語）A2"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={"クラスセミナー"}
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <Title order={3}>選択科目</Title>
          <KamokuTani
            kamoku={
              <>
                分子細胞生物学概論
                <br />
                Introduction to Biology 1
              </>
            }
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <Title order={2}>基礎科目</Title>
          <Title order={3}>必修科目</Title>
          <KamokuTani
            kamoku={<>総合科目（フレッシュマン・セミナー，学問への誘い）</>}
            needTani={2}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>外国語</>}
            needTani={4}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>情報</>}
            needTani={4}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <Title order={3}>選択科目</Title>
          <KamokuTani
            kamoku={
              <>総合科目（フレッシュマン・セミナー，学問への誘いを除く）</>
            }
            needTani={1}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>体育</>}
            needTani={2}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={
              <>
                外国語
                <br />
                博物館に関する科目
                <br />
                教職に関する科目（現代教育と教育理念，教育史概論，こころの発達，学習の心理，教育指導法（理科）に関する科目に限る）
              </>
            }
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={
              <>
                数学リテラシー1，2，3
                <br />
                科目番号がEC12，EE1，FA，FB，FC，FE，FF，FG，G，HB，HEで始まる科目（EA，EBと共通開設のもの，専門科目として指定されているものならびに学類長が指定するものを除く）
                <br />
                その他学類長が「関連科目A」として特に指定するもの
              </>
            }
            needTani={9}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={
              <>
                微積分1及び2（理工学群），微積分学A（情報科学類），Calculus
                1，Calculus A，Mathematics及びAdvanced
                Mathmatics，または「微積分」相当科目として学類長が指定する科目
              </>
            }
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={
              <>
                線形代数1及び2（理工学群），線形代数A（情報科学類），Linear
                Algebra 1，または「線形代数」相当科目として学類長が指定する科目
              </>
            }
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>物理学序説，物理学概論またはPhysics</>}
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>化学序説または化学概論</>}
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>地学序説，地球環境学1，地球進化学1，2</>}
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>力学1，2，3またはMechanics 1，2</>}
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>電磁気学1，2，3またはElectromagnetism 1</>}
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={<>化学1，2，3またはChemistry 1，2，3</>}
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={
              <>
                プログラミング入門または
                <br />
                Programming 1，2（総合理工）
              </>
            }
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={
              <>
                Thermodynamics 1，2
                <br />
                物理学実験
                <br />
                化学実験
                <br />
                地球学実験
                <br />
                Statistics
              </>
            }
            needTani={0}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
          <KamokuTani
            kamoku={
              <>
                生物資源の開発・生産と持続利用，生物資源としての遺伝子とゲノム，生物資源と環境，生物資源学にみる食品科学・技術の最前線
                <br />
                科目番号がA，B，C，EC24，EC34，EC4，EE21，FH，HC，Yで始まる科目（EA，EBと共通開設のもの，専門科目として指定されているものならびに学類長が指定するものを除く）
                <br />
                その他学類長が「関連科目B」として特に指定するもの
              </>
            }
            needTani={6}
            data={data}
            kamokuNo={""}
          ></KamokuTani>
        </>
      )}
      <Code block>{JSON.stringify(data, null, 2)}</Code>
    </>
  );
}
