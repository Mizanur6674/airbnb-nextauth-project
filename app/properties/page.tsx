import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmtyState from "../components/EmtyState";
import getListings from "../actions/getListings";
import Container from "../components/Container";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmtyState title="Unauthorized" subtitle="please Login" />
      </ClientOnly>
    );
  }
  const listing = await getListings({ userId: currentUser.id });
  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmtyState
          title=" No Properties"
          subtitle="Looks like you have no properties here"
        />
      </ClientOnly>
    );
  }

  return (
    <Container>
      <PropertiesClient currentUser={currentUser} listings={listing} />
    </Container>
  );
};

export default PropertiesPage;
