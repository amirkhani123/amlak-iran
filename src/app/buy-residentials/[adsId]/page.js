import DetailsAdsT from "@/components/templates/DetailsAdsT";
import modelProfile from "@/models/profile";
import connectDB from "@/utils/connections";

async function BuyResidential({ params }) {
  await connectDB();

  let profile = await modelProfile
    .findOne({ _id: params.adsId })
    .select("-userId");
  profile = JSON.parse(JSON.stringify(profile));
  return <DetailsAdsT data={profile} />;
}
export const generateMetadata = async ({ params }) => {
  await connectDB();
  let profile = await modelProfile
    .findOne({ _id: params.adsId })
    .select("-userId");
  return {
    title: profile.title,
    description: profile.description,
  };
};
export default BuyResidential;
