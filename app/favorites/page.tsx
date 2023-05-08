import React from "react";
import ClientOnly from "../components/ClientOnly";
import EmtyState from "../components/EmtyState";
import getFavoriteListings from "../actions/getFavoriteListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const listing = await getFavoriteListings();
  const curretntUser = await getCurrentUser();

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmtyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listing"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoritesClient listing={listing} currentUser={curretntUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
