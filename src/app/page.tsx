"use client";

import { RoundedButton } from "@/components/buttons/Buttons";
import { FlexBox } from "@/components/containers/FlexBox";
import { CenterSpinner } from "@/components/fetchStates/Spinner";
import { InputForm } from "@/components/forms/InputForm";
import { Table } from "@/components/tables/table";
import { DEFAULT_FETCH_OPTIONS } from "@/constants";
import useFetchWhois from "@/hooks/useFetch";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string | null>(null);
  const [debouncedValue, setDebouncedValue] = useState<string | null>(null);
  const { data, isLoading, error } = useFetchWhois(
    debouncedValue,
    DEFAULT_FETCH_OPTIONS
  );

  const handleSearch = () => {
    setDebouncedValue(search);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <FlexBox className="min-w-screen flex-col">
      <FlexBox className="gap-2">
        <InputForm className="w-full" value={search} onChange={setSearch} />
        <RoundedButton handleOnClick={handleSearch}>Search</RoundedButton>
      </FlexBox>
      {isLoading ? (
        <CenterSpinner />
      ) : !!data ? (
        <FlexBox className="flex-col w-full gap-5">
          <h3>Domain Information</h3>
          <Table
            headers={[
              "Domain Name",
              "Registrar",
              "Registration Date",
              "Expiration Date",
              "Estimated Domain Age",
              "Hostnames",
            ]}
            tableData={[
              [
                data.domainName,
                data?.registryData?.registrarName,
                data?.registryData?.createdDate,
                data?.expiresDateNormalized,
                data?.estimatedDomainAge,
                data?.nameServers?.hostNames,
              ],
            ]}
          />
          <h3>Contact Information</h3>
          <Table
            headers={[
              "Registrant Name",
              "Technical Contact Name",
              "Administrative Contact Name",
              "Contact Email",
            ]}
            tableData={[
              [
                data?.registrarName,
                data?.technicalContact?.rawText,
                data?.registryData?.expiresDate,
                data.contactEmail,
              ],
            ]}
          />
        </FlexBox>
      ) : error ? (
        <p className="text-red-700">{error}</p>
      ) : (
        <p>No data avaible</p>
      )}

      {/* <FlexBox>
        
      </FlexBox> */}
    </FlexBox>
  );
}
