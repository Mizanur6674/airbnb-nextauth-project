import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

import ClientOnly from "../components/ClientOnly";
import EmtyState from "../components/EmtyState";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmtyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmtyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties"
        />
      </ClientOnly>
    );
  }
  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};
export default ReservationsPage;
