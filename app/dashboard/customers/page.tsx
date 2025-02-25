import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { Suspense } from "react";
import CustomersTable from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: "Customers | Acme Dashboard",
};

export default async function Page(props: {
  searchParams?: Promise<{
    search?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.search || "";

  const customers = await fetchFilteredCustomers(query);

  return <CustomersTable customers={customers} />;
}
