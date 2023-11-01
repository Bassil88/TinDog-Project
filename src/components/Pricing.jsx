export default function Pricing() {
  return (
    <div>
    <section id="pricing">
      <div className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 className="display-4 fw-normal">A Plan for Every Dogs Needs</h2>
          <p className="fs-5 text-body-secondary">Simple and affordable price plans for you and your dog.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Chihuahua</h4>
              </div>
              <div className="card-body">
                <h2 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>5 Matches Per Day</li>
                  <li>10 Messages Per Day</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Labrador</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Unlimited Matches</li>
                  <li>Unlimited Messages</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-dark">Get started</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-dark">
              <div className="card-header py-3 text-bg-dark border-dark">
                <h4 className="my-0 fw-normal">Mastiff</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Pirority Listing</li>
                  <li>Unlimited Matches & Messages</li>
                  <li>Unlimited App Usage</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-dark">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
