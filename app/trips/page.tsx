import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmtyState from "../components/EmtyState";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmtyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }
  const reservations = await getReservations({ userId: currentUser?.id });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmtyState
          title="No trips found"
          subtitle="Looks like you haven't any reserved trips"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};
export default TripsPage;
