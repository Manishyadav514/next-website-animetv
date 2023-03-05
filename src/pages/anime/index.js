import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ThankYou } from "../../components/ThankYou";
import { NoData } from "../../components/NoData";
// import InfiniteScroll from 'react-infinite-scroll-component';

const Anime = (props) => {
  // const [poems, setPoem] = useState(props.PoemData);
  const [poems, setPoem] = useState();
  // const fetchPoemData = async () => {
  //   let res = await fetch(`http://localhost:3000/api/poemAPI`);
  //   const PoemData = await res.json();
  //   console.log(PoemData);
  //   setPoem(PoemData);
  //   // return PoemData;
  // };

  useEffect(() => {
    // fetchPoemData();
  }, []);

  return (
    <div className="">
      <ThankYou
        labelPrimary="Welcome"
        labelSub="to"
        labelSecondry="anime list"
        imagedata={{ src: "/svg/m-girl.svg", height: 600, width: 600 }}
      />
      <main className="">
        {!poems ? (
          <NoData />
        ) : (
          <>
            {poems?.map((poem) => {
              return (
                <div key={poem?.title}>
                  <Link href={`/poem/${poem?.slug}`}>
                    <button className="">{poem?.title}</button>
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </main>
    </div>
  );
};

// import * as fs from "fs";
// export async function getStaticProps(context) {
// 1-method
// let res = await fetch(`http://localhost:3000/api/poemAPI`)
// const PoemData = await res.json()
// 2-method
// let PoemData = await fs.promises.readFile("data/PoemData.json/", "utf-8");
// PoemData = JSON.parse(PoemData)
//   return {
//     props: { PoemData },
//   };
// }

export default Anime;
