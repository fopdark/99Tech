"use client";

import Title from "antd/es/typography/Title";
import React, { useEffect } from "react";

function Problem1() {
  const sum_to_n_a = (n: number) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  };

  const sum_to_n_b = (n: number) => {
    return (n * (n + 1)) / 2;
  };

  const sum_to_n_c: any = (n: number) => {
    if (n <= 1) return n;
    return n + sum_to_n_c(n - 1);
  }

  return (
    <div className="w-dvw h-dvh bg-white text-center p-10">
      <Title>Sum to N</Title>
      <p className="whitespace-pre-line text-left">
        {`Provide 3 unique implementations of the following function in JavaScript.
          **Input**: 'n' - any integer *Assuming this input will always produce a result lesser than 'Number.MAX_SAFE_INTEGER'*. 
          **Output**: 'return' - summation to 'n', i.e. 'sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15'.
        `}
      </p>
      <div className="flex gap-5 items-center my-2">
        <Title level={5} className="!mb-0">Result (sum_to_n_a):</Title>
        <p>{sum_to_n_a(5)}</p>
      </div>
      <div className="flex gap-5 items-center my-2">
        <Title level={5} className="!mb-0">Result (sum_to_n_b):</Title>
        <p>{sum_to_n_b(5)}</p>
      </div>
      <div className="flex gap-5 items-center my-2">
        <Title level={5} className="!mb-0">Result (sum_to_n_c):</Title>
        <p>{sum_to_n_c(5)}</p>
      </div>
    </div>
  );
}

export default Problem1;
