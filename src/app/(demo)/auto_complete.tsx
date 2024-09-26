"use client";
import { searchUser } from "@/actions/sidafa";
import React, { useRef, useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";

type TBalance = {
  balance?: string;
  totalAmount?: any;
  transactions?: TTransactions[];
};

type TTransactions = {
  amount: string;
  balance: string;
  date: string;
  description: string;
  number: string;
  teller: string;
  type: string;
};

type namesOption = {
  value: string;
  label: string;
  address: string;
  name: string;
};

export const AutoComplete = () => {
  const [controller, setController] = useState<AbortController | null>(null);
  const [balances, setBalances] = useState<TBalance | null>(null);
  const [selectedValue, setSelectedValue] = useState<namesOption | null>(null);
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef<AbortController>();
  const namesOptions = (inputValue: string) =>
    new Promise<namesOption[]>((resolve) => {
      resolve(searchUser(inputValue));
    });

  // const balance = async (accountNumner: string) => {
  //     setLoading(true);
  //     const balance = await getBalance(accountNumner);
  //     setBalances(balance);
  //     setLoading(false);
  // };

  const formatNumber = (value: any) => {
    const amountWithoutCommas = parseFloat(value.replace(/[^0-9.-]+/g, ""));
    return amountWithoutCommas.toLocaleString("id-ID");
  };
  return (
    <div>
      <h1 className="text-center text-lg font-bold">DATA SANTRI</h1>
      <div className="panel custom-select mt-4">
        <label>Masukan Nama yang akan di cari :</label>
        {/* <Select defaultValue={options[0]} options={options} isSearchable={true} /> */}
        <AsyncSelect
          onChange={(value) => {
            setSelectedValue(value);
            // @ts-ignore
            alert(value.pondok);
          }}
          cacheOptions
          defaultOptions
          loadOptions={namesOptions}
        />
      </div>
    </div>
  );
};
