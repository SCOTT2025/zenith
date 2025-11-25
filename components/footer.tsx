export function Footer() {
  return (
    <footer className="bg-(--color-bg-secondary) border-t border-(--color-border) mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-(--color-text-primary) mb-4">HomeHaven</h3>
            <p className="text-(--color-text-secondary) text-sm">Finding trusted student accommodation made simple.</p>
          </div>
          <div>
            <h4 className="font-semibold text-(--color-text-primary) mb-4">For Students</h4>
            <ul className="space-y-2 text-sm text-(--color-text-secondary)">
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  Browse Accommodation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-(--color-text-primary) mb-4">For Landlords</h4>
            <ul className="space-y-2 text-sm text-(--color-text-secondary)">
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  List Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-(--color-text-primary) mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-(--color-text-secondary)">
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--color-primary)">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-(--color-border) pt-8">
          <p className="text-center text-sm text-(--color-text-secondary)">
            &copy; 2025 HomeHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
