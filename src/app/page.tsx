"use client";

import { RoundedButton } from "@/components/buttons/Buttons";
import { Card } from "@/components/cards/Card";
import { FlexBox } from "@/components/containers/FlexBox";
import { CenterSpinner } from "@/components/fetchStates/Spinner";
import { InputForm } from "@/components/forms/InputForm";
import { Table } from "@/components/tables/table";
import { H4 } from "@/components/text/Headers";
import { useToast } from "@/components/wrappers/context";
import { DEFAULT_FETCH_OPTIONS } from "@/constants";
import useFetchWhois from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Home() {
  const [search, setSearch] = useState<string | null>(null);
  const [debouncedValue, setDebouncedValue] = useState<string | null>(null);
  const { addToast } = useToast();
  const { data, isLoading, error } = useFetchWhois(
    debouncedValue,
    DEFAULT_FETCH_OPTIONS
  );

  useEffect(() => {
    if (!!error) addToast(error ?? "An error has occurred", "error");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleSearch = () => {
    setDebouncedValue(search);
  };

  return (
    <Card className="min-w-full items-center flex-col">
      <FlexBox className="gap-2 w-1/4">
        <InputForm
          className="w-full flex-2"
          value={search}
          onChange={setSearch}
        />
        <RoundedButton className="flex-1" handleOnClick={handleSearch}>
          <FaMagnifyingGlass />
          Search
        </RoundedButton>
      </FlexBox>
      {isLoading ? (
        <CenterSpinner />
      ) : !!data ? (
        <FlexBox className="flex-col w-full gap-5">
          <H4>Domain Information</H4>
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
          <H4>Contact Information</H4>
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
                data?.technicalContact?.country,
                data?.contactEmail,
                data.contactEmail,
              ],
            ]}
          />
        </FlexBox>
      ) : (
        <p>No data avaible</p>
      )}
    </Card>
  );
}
