import Image from "next/image";
import Link from 'next/link';
import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const OffsideLogo = ({ width = 103.37, height = 40.6 }: Props) => {
  return (
    <Link href={"/"}>
      <Image
        src="/images/logo.svg"
        alt="Offside Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
};

export default OffsideLogo;
