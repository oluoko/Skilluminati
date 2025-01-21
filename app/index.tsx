import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Redirect } from "expo-router";

export default function Index() {
  const [loggedInUser, setloggedInUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = async () => {
      try {
        // Use getItemAsync instead of getItem
        const token = await SecureStore.getItemAsync("accessToken");
        setloggedInUser(!!token); // Set to true if token exists
      } catch (error) {
        console.error("Error fetching access token:", error);
      } finally {
        setLoading(false);
      }
    };

    subscription();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
}
