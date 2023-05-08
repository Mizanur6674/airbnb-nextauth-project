"use client";
import { toast } from "react-hot-toast";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeListing, SafeUser } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onDelete = useCallback(
    async (id: string) => {
      setDeletingId(id);

      await toast
        .promise(axios.delete(`/api/listings/${id}`), {
          error: "Something went wrong",
          loading: "Cancelling...",
          success: "property Deleted",
        })
        .finally(() => {
          setDeletingId("");
        });
      router.refresh();
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Properties" subtitle="List of your Properties" />
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onDelete}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
