"use client";
import React from "react";
import { SafeListing, SafeUser } from "../types";
import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
interface FavoritesClientProps {
  currentUser?: SafeUser | null;
  listing: SafeListing[];
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  currentUser,
  listing,
}) => {
  const router = useRouter();

  return (
    <Container>
      <Heading title="Favorites" subtitle="List of place you have favorited" />

      <div
        className=" 
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
        "
      >
        {listing.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
