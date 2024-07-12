import Picture from '@ui/components/Picture';
import { Plane } from '@ui/assets/Icons';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from '@ui/assets/Icons/social';

export default function Footer() {
  return (
    <footer className="mt-auto bg-black px-6 xl:px-[135px]">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap justify-center gap-x-24 gap-y-12 pt-[75px] text-center text-white md:justify-between lg:text-left">
        {/* Exclusive */}
        <div className="flex flex-col">
          <h2 className="font-heading-bold text-2xl tracking-[0.03em]">Exclusive</h2>
          <a href="/" className="mt-6 font-medium text-xl leading-[1.4]">
            Subscribe
          </a>
          <p className="mt-6 leading-[1.4]">Get 10% off your first order</p>
          <form
            action="/"
            method="get"
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex items-center gap-x-8 rounded border-2 border-white px-3.5 py-2.5"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="max-w-[130px] bg-transparent leading-[1.6]"
            />
            <button type="submit" aria-label="subscribe">
              <Plane />
            </button>
          </form>
        </div>
        {/* Support */}
        <div className="flex flex-col justify-start">
          <h2 className="font-medium text-xl leading-[1.4]">Support</h2>
          <p className="mt-6 max-w-[18ch] leading-[1.5]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="mt-5">exclusive@gmail.com</p>
          <p className="mt-6">+88015-88888-9999</p>
        </div>
        {/* Account */}
        <div className="-ms-[7px] flex flex-col justify-start">
          <h2 className="font-medium text-xl leading-[1.4]">Account</h2>
          <div className="grid gap-y-6 py-7">
            <Link to="/login">Login / Register</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/">Shop</Link>
          </div>
        </div>
        {/* Quick Link */}
        <div className="flex flex-col justify-start">
          <h2 className="font-medium text-xl leading-[1.4]">Quick Link</h2>
          <div className="grid gap-y-6 py-7">
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Terms Of Use</Link>
            <Link to="/about">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        {/* App */}
        <div className="flex flex-col justify-start">
          <h2 className="font-medium text-xl leading-[1.4]">Download App</h2>
          <p className="mt-[26px] font-medium text-xs opacity-70">Save $3 with App New User Only</p>
          <div className="flex items-center gap-x-2 gap-y-1 py-3">
            <Picture src="/app/qr_code.png" alt="qr code" className="row-span-2" />
            <div className="grid gap-y-1">
              <Link target="_blank" to="https://play.google.com" aria-label="google playstore">
                <Picture src="/app/GooglePlay.png" alt="google playstore" />
              </Link>
              <Link target="_blank" to="https://www.apple.com/app-store/" aria-label="app store">
                <Picture src="/app/AppStore.png" alt="app store" />
              </Link>
            </div>
          </div>
          {/* Social Media */}
          <div className="mt-3 flex gap-6">
            <Link target="_blank" to="https://www.facebook.com" aria-label="facebook">
              <Facebook />
            </Link>
            <Link target="_blank" to="https://x.com" aria-label="twitter">
              <Twitter />
            </Link>
            <Link target="_blank" to="https://www.instagram.com" aria-label="instagram">
              <Instagram />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com" aria-label="linkedin">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <span className="mx-auto mt-9 flex max-w-screen-2xl items-center justify-center gap-x-1 py-4 text-white opacity-30">
        &copy; Copyright Rimel 2022. All right reserved
      </span>
    </footer>
  );
}
