import Image from "next/image";
import Container from "../Container/Container";
import Link from "next/link";

import { useState } from "react";
import {
  ContentWraper,
  FooterSection,
  FooterWraper,
  FormWraper,
  InputWraper,
  LinkBox,
  LinkWraper,
  ScrollBtn,
} from "./Footer.styled";

export default function Footer() {
  const [form, setForm] = useState("");

  return (
    <>
      <FooterSection>
        <Container>
          <FooterWraper>
            <Image
              src="/Takesite-logo-color.svg"
              alt="Logo"
              width={250}
              height={54}
            />
            <ScrollBtn></ScrollBtn>
            <ContentWraper>
            <FormWraper>
              <h2>Newsletter</h2>
              <InputWraper>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={form}
                onChange={(e) => {
                  setForm(e.target.value);
                }}
              />
              <button></button>
              </InputWraper>
              
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="42"
                    viewBox="0 0 43 42"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_51_344)">
                      <path
                        d="M32.2499 0H10.7499C4.8379 0 -0.00012207 4.72346 -0.00012207 10.5V31.5C-0.00012207 37.2745 4.8379 42 10.7499 42H32.2499C38.1619 42 42.9999 37.2745 42.9999 31.5V10.5C42.9999 4.72346 38.1619 0 32.2499 0ZM21.4999 29.7497C16.5516 29.7497 12.5414 25.831 12.5414 21C12.5414 16.1668 16.5516 12.2498 21.4999 12.2498C26.4459 12.2498 30.4584 16.1668 30.4584 21C30.4584 25.831 26.4459 29.7497 21.4999 29.7497ZM33.1459 12.2498C31.6602 12.2498 30.4584 11.0743 30.4584 9.62483C30.4584 8.17534 31.6602 6.99983 33.1459 6.99983C34.6316 6.99983 35.8334 8.17534 35.8334 9.62483C35.8334 11.0743 34.6316 12.2498 33.1459 12.2498Z"
                        fill="#11112B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_51_344">
                        <rect width="43" height="42" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M19.3921 26.4957C19.2481 26.4957 16.0801 26.4957 14.6401 26.4957C13.8721 26.4957 13.6321 26.2077 13.6321 25.4877C13.6321 23.5677 13.6321 21.5997 13.6321 19.6797C13.6321 18.9117 13.9201 18.6717 14.6401 18.6717H19.3921C19.3921 18.5277 19.3921 15.7437 19.3921 14.4477C19.3921 12.5277 19.7281 10.7037 20.6881 9.02366C21.6961 7.29566 23.1361 6.14366 24.9601 5.47166C26.1601 5.03966 27.3601 4.84766 28.6561 4.84766H33.3601C34.0321 4.84766 34.3201 5.13566 34.3201 5.80766V11.2797C34.3201 11.9517 34.0321 12.2397 33.3601 12.2397C32.0641 12.2397 30.7681 12.2397 29.4721 12.2877C28.1761 12.2877 27.5041 12.9117 27.5041 14.2557C27.4561 15.6957 27.5041 17.0877 27.5041 18.5757H33.0721C33.8401 18.5757 34.1281 18.8637 34.1281 19.6317V25.4397C34.1281 26.2077 33.8881 26.4477 33.0721 26.4477C31.3441 26.4477 27.6481 26.4477 27.5041 26.4477V42.0957C27.5041 42.9117 27.2641 43.1997 26.4001 43.1997C24.3841 43.1997 22.4161 43.1997 20.4001 43.1997C19.6801 43.1997 19.3921 42.9117 19.3921 42.1917C19.3921 37.1517 19.3921 26.6397 19.3921 26.4957Z"
                      fill="#11112B"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_51_348)">
                      <path
                        d="M40 7.5975C38.5125 8.25 36.9275 8.6825 35.275 8.8925C36.975 7.8775 38.2725 6.2825 38.8825 4.36C37.2975 5.305 35.5475 5.9725 33.6825 6.345C32.1775 4.7425 30.0325 3.75 27.6925 3.75C23.1525 3.75 19.4975 7.435 19.4975 11.9525C19.4975 12.6025 19.5525 13.2275 19.6875 13.8225C12.87 13.49 6.8375 10.2225 2.785 5.245C2.0775 6.4725 1.6625 7.8775 1.6625 9.39C1.6625 12.23 3.125 14.7475 5.305 16.205C3.9875 16.18 2.695 15.7975 1.6 15.195C1.6 15.22 1.6 15.2525 1.6 15.285C1.6 19.27 4.4425 22.58 8.17 23.3425C7.5025 23.525 6.775 23.6125 6.02 23.6125C5.495 23.6125 4.965 23.5825 4.4675 23.4725C5.53 26.72 8.545 29.1075 12.13 29.185C9.34 31.3675 5.7975 32.6825 1.9625 32.6825C1.29 32.6825 0.645 32.6525 0 32.57C3.6325 34.9125 7.9375 36.25 12.58 36.25C27.67 36.25 35.92 23.75 35.92 12.915C35.92 12.5525 35.9075 12.2025 35.89 11.855C37.5175 10.7 38.885 9.2575 40 7.5975Z"
                        fill="#11112B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_51_348">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </FormWraper>
            <LinkBox>
            <LinkWraper>
              <h3>Explore</h3>
              <ul>
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </LinkWraper>
            <LinkWraper>
              <h3>Contact</h3>
              <ul>
                <li>
                  <Link href="/">Email</Link>
                </li>
                <li>
                  <Link href="/">Phone</Link>
                </li>
                <li>
                  <Link href="/">Address</Link>
                </li>
                <li>
                  <Link href="/">Social Media</Link>
                </li>
              </ul>
            </LinkWraper>
            </LinkBox>
            </ContentWraper>
          </FooterWraper>
        </Container>
      </FooterSection>
    </>
  );
}
