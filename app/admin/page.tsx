import { redirect } from "next/navigation";

/**
 * `/admin` is an alias for the real Sanity Studio at `/studio`.
 * Editors can bookmark either URL.
 */
export default function AdminRedirect() {
  redirect("/studio");
}
