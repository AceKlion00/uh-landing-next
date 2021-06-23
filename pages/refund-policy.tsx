import Head from 'next/head';
import { Layout } from '../components/layout/layout';

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund and Delivery Policy - United Hardscapes</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space." />
      </Head>
      <Layout>
        <section className="py-90">
          <div className="container mx-auto text-16 text-light-500 text-center">
            <h1 className="text-32 text-secondary font-medium mb-40">United Hardscapes Refund and Delivery Policy</h1>
            <p className="mb-15">Thank you for your business, below is a layout of our return policy. If you have any questions please
              contact us at <a href="mailto:Support@UnitedHardscapes.com"
                               className="text-primary">Support@UnitedHardscapes.com</a>.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Initial Deposits</h5>
            <p className="mb-15">Initial deposits of $500 that are required to start custom kit design and preparation are non-refundable,
              deposits will be credited towards the total kit cost.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Kit Cancellation Policy</h5>
            <p className="mb-15">Orders canceled within 72 hours of delivery are eligible for a refund minus the non-refundable deposit.
              Specialty orders may face certain restrictions such as a restocking fee or not be eligible for a refund,
              once materials are delivered all sales are final.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Returns On “Extra”
              Materials</h5>
            <p className="mb-15">Materials are sold only by the “layer”. United Hardscapes kits factor in for extra square footage needed
              for cuts since when installed to proper specifications there should be little extra materials and the
              materials that are leftover should be saved in case pieces ever need to be switched out in the future or
              the project is added onto. There are no returns on extra materials.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Delivery</h5>
            <p className="mb-15">United Hardscapes and its suppliers will not be held liable or responsible for any/all damage to personal
              property. Due to the weight of the delivery trucks combined with materials, United Hardscapes and its
              suppliers are not responsible for any damages that could occur to the driveway, parking lots, sidewalk,
              lawn, house, garage, building, vehicles, shrubs, utility wires, wells, underground systems, etc., or any
              other items of property, real or personal located at the delivery site including possible staining from
              natural or dyed materials.</p>

            <ul className="text-left list-disc ml-20 md:ml-0 mb-30">
              <li className="mb-15">Please provide a confirmation address for the delivery location. It is important that the delivery
                address is confirmed in advance of the delivery and a cross street is provided.
              </li>
              <li className="mb-15">Please choose a dumping/drop-off location. For most deliveries, placement of the product is usually on
                the driveway or any reasonable hard surface. Please make sure the delivery site has no access
                restrictions (powerlines, tree limbs, and any other overhanging obstructions that could prevent from
                dumping). Please advise if you have a driveway that is less than one year old or low power lines.
              </li>
              <li className="mb-15">Mark the delivery/drop-off location flag, bucket, chair, or tarp to ensure exact location.</li>
              <li className="mb-15">Deliveries may have separate trucks – Dump or Flatbed trucks. One bulk material product per truck
                delivery.
              </li>
              <li className="mb-15">Your delivery will arrive on the scheduled day. Customers do not have to be home to accept delivery.
              </li>
              <li className="mb-15">We cannot specify an exact time of day for delivery. Due to the high volume of deliveries, unforeseen
                circumstances, staffing or weather conditions your delivery date may be changed.
              </li>
              <li className="mb-15">Deliveries onto unpaved surface areas after rain are not permitted.</li>
              <li className="mb-15">Deliveries cannot be made on properties other than the customers, i.e., city sidewalks, neighbors’
                driveway, without written permission of the property owner.
              </li>
              <li className="mb-15">If the driver cannot safely dump at the requested location, it will be placed in the driveway or the
                delivery will be canceled. United Hardscapes and its suppliers reserve the right to cancel shipment at
                any time, including at the delivery site, if we determine that there is no opportunity to deliver safely
                or accurately.
              </li>
              <li className="mb-15">If such a cancellation is made, we will refund the customer the amount for the product purchased.
                Delivery fees associated with the order will not be refunded if the delivery vehicle has delivered the
                product to the specified address before activating the cancellation.
              </li>
              <li className="mb-15">Any bulk product that has been over-ordered will not be picked up or reimbursed once it has been
                delivered.
              </li>
              <li className="mb-15">On arrival of the product, please make sure that all goods are present and intact. If you see any
                potential or actual damages, please contact us within 24 hours.
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
}
