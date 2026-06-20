import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const [promoImages, setPromoImages] = useState([
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200",
  ]);
  const API = "https://bustravelbooking-project.onrender.com/api";
  fetch(`${API}/destinations/`)
  fetch(`${API}/tickets/`)
  fetch(`${API}/feedbacks/`)
  const [scheduleForm, setScheduleForm] = useState({
  vehicle: "Bus",
  direction: "",
  time: "",
  price: "",
  repeatDaily: true,
});
  const [showPayment, setShowPayment] = useState(false);
  const [routeSchedules, setRouteSchedules] = useState([]);
  const [destinations, setDestinations] = useState([
    { from: "Phnom Penh", to: "Siem Reap", time: "6h", price: "$12" },
    { from: "Phnom Penh", to: "Battambang", time: "5h", price: "$10" },
    { from: "Siem Reap", to: "Sihanoukville", time: "9h", price: "$18" },
  ]);

  const [authPage, setAuthPage] = useState("login");
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ from: "", to: "", time: "", price: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLogin, setAdminLogin] = useState({ email: "", password: "" });
  const [form, setForm] = useState({name: "", email: "",password: "",});
  const [ticket, setTicket] = useState(null);

  const vehicleTypes = ["Bus", "Van", "Night Bus"];

  // const routes = [
  //   "Phnom Penh → Siem Reap",
  //   "Phnom Penh → Sihanoukville",
  //   "Phnom Penh → Battambang",
  //   "Phnom Penh → Poi Pet",
  //   "Battambang → Phnom Penh",
  //   "Battambang → Siem Reap",
  //   "Battambang → Poi Pet",
  //   "Siem Reap → Phnom Penh",
  //   "Siem Reap → Sihanoukville",
  //   "Siem Reap → Battambang",
  //   "Siem Reap → Poi Pet",
  //   "Sihanoukville → Phnom Penh",
  //   "Sihanoukville → Siem Reap",
  //   "Poi Pet → Phnom Penh",
  //   "Poi Pet → Battambang",
  //   "Poi Pet → Siem Reap",
  // ];

  const vanSeats = [
    "V1", "V2", 
    "V3", "V4", "V5",
    "V6", "V7", "V8",
    "V9", "V10", "V11",
    "V12", "V13", "V14",
    "V15", "V16", "V17","V18",
  ];

  const busSeats = [
    "A1", "A2", "A3", "A4",
    "B1", "B2", "B3", "B4",
    "C1", "C2", "C3", "C4",
    "D1", "D2", "D3", "D4",
    "E1", "E2", "E3", "E4",
    "F1", "F2", "F3", "F4",
    "G1", "G2", "G3", "G4",
    "H1", "H2", "H3", "H4",
    "I1", "I2", "I3", "I4",

  ];

  const nightBusGround = [
    ["G1", "G2", "G3"],
    ["G4", "G5", "G6"],
    ["G7", "G8", "G9"],
    ["G10", "G11", "G12"],
    ["G13", "G14", "G15"],
    ["G16", "G17", "G18"],
    ["G19", "G20", "G21"],
    ["G22", "G23", "G24"],
    ["G25", "G26", "G27"],
  ];

  const nightBusFirst = [
    ["F1", "F2", "F3"],
    ["F4", "F5", "F6"],
    ["F7", "F8", "F9"],
    ["F10", "F11", "F12"],
    ["F13", "F14", "F15"],
    ["F16", "F17", "F18"],
    ["F19", "F20", "F21"],
    ["F22", "F23", "F24"],
    ["F25", "F26", "F27"],
  ];

  const [booking, setBooking] = useState({
  vehicle: "",
  floor: "Ground Floor",
  direction: "",
  date: "",
  time: "",
  seats: [],
  seat: "",
  phone: "",
  payment: "",
});

  const selectedSchedule = routeSchedules.find(
  (s) =>
    s.vehicle === booking.vehicle &&
    s.direction === booking.direction &&
    s.time === booking.time
);

const unitPrice = selectedSchedule ? selectedSchedule.price : 0;
const price = (booking.seats?.length || 0) * unitPrice;

  const branches = [
    {
      name: "Phnom Penh Main Branch",
      address: "21 France St. (47), Phnom Penh",
      phone: "015 22 22 22",
      open: "24 Hours",
       image:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/6/2025/01/28121636/phnom-penh-fi-1600x900.jpeg",
      map: "https://maps.app.goo.gl/z1fZsJCj3JW6zibE8",
    },
    {
      name: "Siem Reap Branch",
      address: "Chong Kao Sou, Krong Siem Reap",
      phone: "066 22 22 22",
      open: "24 Hours",
      image:
      "https://rootsabroadtravel.com/wp-content/uploads/2024/03/Wonderful-Things-to-Do-in-Siem-Reap-Cambodia-Beyond-Angkor-Wat.jpg",
      map: "https://maps.app.goo.gl/6SkR2WgP98oCn1j29",
    },
    {
      name: "Battambang Branch",
      address: "Phum Prek Mohatep,Krong Battambang",
      phone: "085 22 22 22",
      open: "24 Hours",
      image:
      "https://www.asiakingtravel.com/images/thumbs/2025/05/20099/484485091-954347766728937-8962258597941090426-n_1296x730xcrop.webp",
      map: "https://maps.app.goo.gl/wRraau9tgsnVntk16",
    },
    {
      name: "Poi Pet Branch",
      address: "AH1, Krong Poi Pet",
      phone: "010 22 22 22",
      open: "24 Hours",
      image:
      "https://live.staticflickr.com/7554/26855293792_f12f567306.jpg",
      map: "https://maps.app.goo.gl/CtAVk6efDUeqVmnu6",
    },
    {
      name: "Sihanoukville Branch",
      address: "Street Kamakor,Preah Sihanoukville",
      phone: "096 22 22 22",
      open: "24 Hours",
      image:
      "https://seeingthissphere.wordpress.com/wp-content/uploads/2013/10/100_0303.jpg",
      map: "https://maps.app.goo.gl/3YU1YYAYQDi45hJe8",
    },
  ];

  const schedules = {
    "Phnom Penh → Siem Reap": ["06:00 AM", "08:00 AM", "10:00 AM", "02:00 PM", "06:00 PM"],
    "Phnom Penh → Battambang": ["07:00 AM", "09:00 AM", "01:00 PM", "05:00 PM"],
    "Phnom Penh → Sihanoukville": ["05:30 AM", "09:30 AM", "01:30 PM", "07:30 PM"],
    "Siem Reap → Phnom Penh": ["06:00 AM", "09:00 AM", "12:00 PM", "05:00 PM"],
  };

  const tripDuration = {
    "Phnom Penh → Siem Reap": 6,
    "Phnom Penh → Battambang": 5,
    "Phnom Penh → Sihanoukville": 4,
    "Siem Reap → Phnom Penh": 6,
  };
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [feedbackForm, setFeedbackForm] = useState({
  name: "",
  rating: "5",
  message: "",
});

const [feedbacks, setFeedbacks] = useState([
  {
    id: 1,
    name: "Sokha",
    rating: "5",
    message: "Very easy to book and the bus was clean.",
  },
  {
    id: 2,
    name: "Chan",
    rating: "5",
    message: "Fast KHQR payment and nice ticket system.",
  },
]);

// const handleRegister = async (e) => {
//   e.preventDefault();

//   await fetch("https://YOUR-RENDER-URL.onrender.com/api/register/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: form.name,
//       email: form.email,
//       password: form.password,
//     }),
//   });
// };
async function handleLogin(e) {
  e.preventDefault();

  const res = await fetch(`${API}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: authForm.email,
      password: authForm.password,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.error);
    return;
  }

  setUser(data.user);
  setIsUserLogin(true);
  setPage("fast");
}
function submitFeedback(e) {
  e.preventDefault();

  if (!feedbackForm.name || !feedbackForm.message) {
    alert("Please enter your name and feedback.");
    return;
  }

  setFeedbacks([
    {
      id: Date.now(),
      ...feedbackForm,
    },
    ...feedbacks,
  ]);

  setFeedbackForm({
    name: "",
    rating: "5",
    message: "",
  });
}
async function submitFeedback(e) {
  e.preventDefault();

  const res = await fetch(`${API}/feedbacks/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(feedbackForm),
  });

  const data = await res.json();

  if (!res.ok) {
    alert("Feedback failed");
    return;
  }

  setFeedbacks([data, ...feedbacks]);
  setFeedbackForm({ name: "", rating: "5", message: "" });
}
  function handleRegister(e) {
  e.preventDefault();
  localStorage.setItem("bus_user", JSON.stringify(authForm));
  alert("Register success");
  setAuthPage("login");
}

function handleLogin(e) {
  e.preventDefault();

  const savedUser = JSON.parse(localStorage.getItem("bus_user"));

  if (
    savedUser &&
    savedUser.email === authForm.email &&
    savedUser.password === authForm.password
  ) {
    setUser(savedUser);
    setIsUserLogin(true);
    setPage("fast");
  } else {
    alert("Wrong email or password");
  }
}

function addSchedule(e) {
  e.preventDefault();

  if (
    !scheduleForm.vehicle ||
    !scheduleForm.direction ||
    !scheduleForm.time ||
    !scheduleForm.price
  ) {
    alert("Please select vehicle, direction, time and price");
    return;
  }

  setRouteSchedules([
    ...routeSchedules,
    {
      id: Date.now(),
      vehicle: scheduleForm.vehicle,
      direction: scheduleForm.direction,
      time: scheduleForm.time,
      price: Number(scheduleForm.price),
      repeatDaily: scheduleForm.repeatDaily,
    },
  ]);

  setScheduleForm({
    vehicle: "Bus",
    direction: "",
    time: "",
    price: "",
    repeatDaily: true,
  });
}
  function toggleSeat(seat) {
  setBooking((prev) => ({
    ...prev,
    seats: prev.seats.includes(seat)
      ? prev.seats.filter((s) => s !== seat)
      : [...prev.seats, seat],
  }));
}
  function handleAdminLogin(e) {
    e.preventDefault();

    if (adminLogin.email === "admin@gmail.com" && adminLogin.password === "123456") {
      setIsAdmin(true);
      alert("Admin login success");
    } else {
      alert("Wrong admin email or password");
    }
  }

  function uploadPromo(e) {
    const file = e.target.files[0];
    if (!file) return;
    setPromoImages([...promoImages, URL.createObjectURL(file)]);
  }

  function addDestination(e) {
    e.preventDefault();

    if (!form.from || !form.to || !form.time || !form.price) return;

    setDestinations([...destinations, form]);
    setForm({ from: "", to: "", time: "", price: "" });
  }

  function selectVehicle(type) {
    setBooking({
      ...booking,
      vehicle: type,
      direction: "",
      time: "",
      seats: [],
      floor: type === "Night Bus" ? "Ground Floor" : "",
    });
  }

  function payNow() {
    if (
      !booking.vehicle ||
      !booking.direction ||
      !booking.date ||
      !booking.time ||
      !booking.seat ||
      !booking.phone ||
      !booking.payment
    ) {
      alert("Please complete all booking information.");
      return;
    }

    const qrData = `${booking.vehicle} | ${booking.direction} | Seat ${booking.seat} | ${
      booking.vehicle === "Night Bus" ? booking.floor + " | " : ""
    }${booking.date} ${booking.time}`;

    const newTicket = {
      ticketNo: "BT-" + Math.floor(100000 + Math.random() * 900000),
      qr: `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrData)}`,
      vehicle: booking.vehicle,
      floor: booking.floor,
      seat: booking.seat,
      destination: booking.direction,
      date: booking.date,
      time: booking.time,
      checkIn: "Please check in 30 minutes before departure",
      phone: booking.phone,
      price: price.toLocaleString(),
    };

    setTicket(newTicket);
    setPage("print");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="bg-[#198900] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm font-semibold text-white">
          <p>ⓘ For more information, please call: 016-202020</p>

          <div className="flex items-center gap-2 font-bold">
            <img
              src="https://flagcdn.com/w40/kh.png"
              alt="Cambodia Flag"
              className="h-5 w-7 rounded-sm"
            />
            <span>Cambodia Bus Express</span>
          </div>
        </div>
      </div>

      <header className="bg-[#1f9b00] text-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <button onClick={() => setPage("home")} className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-2xl font-black text-[#1f9b00]">
              B
            </div>
            <div className="text-left">
              <h1 className="text-xl font-black">BusTravel</h1>
              <p className="text-xs">Bus Express</p>
            </div>
          </button>

          <nav className="hidden gap-7 font-bold md:flex">
            <button onClick={() => setPage("home")} className={page === "home" ? "border-b-4 border-yellow-400 pb-2" : ""}>
              Bus Booking
            </button>

            <button onClick={() => setPage("fast")} className={page === "fast" ? "border-b-4 border-yellow-400 pb-2" : ""}>
              Fast Booking
            </button>

            <button onClick={() => setPage("print")} className={page === "print" ? "border-b-4 border-yellow-400 pb-2" : ""}>
              Print Bus Ticket
            </button>

            <button onClick={() => setPage("branches")} className={page === "branches" ? "border-b-4 border-yellow-400 pb-2" : ""}>
              Our Branches
            </button>

            <button>About Us</button>
            <button>FAQs</button>
          </nav>

          <button onClick={() => setPage("admin")} className="rounded-lg border border-white px-5 py-2 font-bold">
            Admin
          </button>
          {isUserLogin ? (
            <button onClick={logoutUser} className="rounded-xl bg-red-500 px-5 py-2 font-bold text-white">
              Logout
            </button>
          ) : (
            <button onClick={() => setPage("auth")} className="rounded-xl bg-white px-5 py-2 font-bold text-green-700">
              Login
            </button>
          )}
        </div>
      </header>
{/* REGISTER, LOGIN AND LOGOUT */}
{page === "auth" && (
  <section className="min-h-screen bg-[#f3faf4] px-4 py-8">
    <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[34px] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] lg:grid-cols-[1.1fr_0.9fr]">

      {/* LEFT SIDE */}
      <div className="relative hidden min-h-[720px] overflow-hidden bg-slate-900 lg:block">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600"
          alt="Cambodia Bus Express"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-green-950/65 to-black/70" />

        <div className="absolute left-10 top-10 z-10 flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-white text-4xl shadow-xl">
            🚌
          </div>

          <div>
            <h1 className="text-3xl font-black text-white">
              Cambodia Bus Express
            </h1>
            <p className="text-sm font-semibold text-white/70">
              Safe Travel, Happy Journey
            </p>
          </div>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end p-12 text-white">
          <div className="mb-8 flex gap-3">
            <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-black backdrop-blur">
              ⚡ Fast Booking
            </span>
            <span className="rounded-full bg-green-400/20 px-5 py-2 text-sm font-black text-green-200 backdrop-blur">
              KHQR Payment
            </span>
          </div>

          <h2 className="max-w-xl text-6xl font-black leading-[1.05]">
            Your next trip starts here.
          </h2>

          <p className="mt-5 max-w-lg text-lg font-medium leading-8 text-white/75">
            Register or login to book tickets, choose your seat, manage bookings,
            and get your QR e-ticket instantly.
          </p>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-3xl border border-white/15 bg-white/15 p-5 backdrop-blur">
              <h3 className="text-3xl font-black">24/7</h3>
              <p className="mt-1 text-sm font-semibold text-white/70">
                Online Booking
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/15 p-5 backdrop-blur">
              <h3 className="text-3xl font-black">QR</h3>
              <p className="mt-1 text-sm font-semibold text-white/70">
                E-Ticket
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/15 p-5 backdrop-blur">
              <h3 className="text-3xl font-black">Safe</h3>
              <p className="mt-1 text-sm font-semibold text-white/70">
                Travel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT FORM SIDE */}
      <div className="relative p-6 md:p-10 lg:p-12">
        <div className="absolute right-8 top-8 hidden rounded-full bg-green-50 px-5 py-2 text-sm font-black text-green-700 md:block">
          🟢 Secure Account
        </div>

        <button
          type="button"
          onClick={() => setPage("home")}
          className="mb-8 rounded-full bg-slate-100 px-5 py-2 text-sm font-black text-slate-600 transition hover:bg-green-100 hover:text-green-700"
        >
          ← Back Home
        </button>

        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-green-600">
            Welcome Back
          </p>

          <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            {authPage === "login"
              ? "Login to your account"
              : "Create your account"}
          </h2>

          <p className="mt-4 max-w-md text-base font-medium leading-7 text-slate-500">
            {authPage === "login"
              ? "Continue your booking, check ticket history, and manage your trips."
              : "Join Cambodia Bus Express and start booking your trip today."}
          </p>
        </div>

        {/* TABS */}
        <div className="mb-8 grid grid-cols-2 rounded-3xl bg-slate-100 p-2">
          <button
            type="button"
            onClick={() => setAuthPage("login")}
            className={`rounded-2xl py-4 font-black transition ${
              authPage === "login"
                ? "bg-green-600 text-white shadow-lg"
                : "text-slate-500 hover:text-green-700"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setAuthPage("register")}
            className={`rounded-2xl py-4 font-black transition ${
              authPage === "register"
                ? "bg-green-600 text-white shadow-lg"
                : "text-slate-500 hover:text-green-700"
            }`}
          >
            Register
          </button>
        </div>

        {authPage === "login" ? (
          <form onSubmit={handleLogin} className="grid gap-5">
            <div>
              <label className="mb-2 block font-black text-slate-700">
                Email Address
              </label>

              <div className="flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">
                <span className="grid w-16 place-items-center bg-slate-50 text-xl">
                  ✉️
                </span>

                <input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={authForm.email}
                  onChange={(e) =>
                    setAuthForm({ ...authForm, email: e.target.value })
                  }
                  className="w-full px-4 py-4 font-bold text-slate-700 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-black text-slate-700">
                Password
              </label>

              <div className="flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">
                <span className="grid w-16 place-items-center bg-slate-50 text-xl">
                  🔒
                </span>

                <input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={authForm.password}
                  onChange={(e) =>
                    setAuthForm({ ...authForm, password: e.target.value })
                  }
                  className="w-full px-4 py-4 font-bold text-slate-700 outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 font-bold text-slate-500">
                <input type="checkbox" className="h-4 w-4 accent-green-600" />
                Remember me
              </label>

              <button type="button" className="font-black text-green-600">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="rounded-3xl bg-gradient-to-r from-green-700 to-green-500 py-4 text-lg font-black text-white shadow-xl shadow-green-200 transition hover:scale-[1.02]"
            >
              Login
            </button>

            <p className="text-center text-sm font-semibold text-slate-500">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthPage("register")}
                className="font-black text-green-600"
              >
                Register here
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="grid gap-5">
            <div>
              <label className="mb-2 block font-black text-slate-700">
                Full Name
              </label>

              <div className="flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">
                <span className="grid w-16 place-items-center bg-slate-50 text-xl">
                  👤
                </span>

                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={authForm.name}
                  onChange={(e) =>
                    setAuthForm({ ...authForm, name: e.target.value })
                  }
                  className="w-full px-4 py-4 font-bold text-slate-700 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-black text-slate-700">
                Email Address
              </label>

              <div className="flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">
                <span className="grid w-16 place-items-center bg-slate-50 text-xl">
                  ✉️
                </span>

                <input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={authForm.email}
                  onChange={(e) =>
                    setAuthForm({ ...authForm, email: e.target.value })
                  }
                  className="w-full px-4 py-4 font-bold text-slate-700 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-black text-slate-700">
                Password
              </label>

              <div className="flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">
                <span className="grid w-16 place-items-center bg-slate-50 text-xl">
                  🔒
                </span>

                <input
                  name="password"
                  type="password"
                  placeholder="Create password"
                  value={authForm.password}
                  onChange={(e) =>
                    setAuthForm({ ...authForm, password: e.target.value })
                  }
                  className="w-full px-4 py-4 font-bold text-slate-700 outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="rounded-3xl bg-gradient-to-r from-green-700 to-green-500 py-4 text-lg font-black text-white shadow-xl shadow-green-200 transition hover:scale-[1.02]"
            >
              Create Account
            </button>

            <p className="text-center text-sm font-semibold text-slate-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthPage("login")}
                className="font-black text-green-600"
              >
                Login here
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  </section>
)}
{/* HOME PAGE */}
      {page === "home" && (
  <main className="min-h-screen bg-[#f4fbf5] text-[14px] text-slate-900">
    {/* HERO */}
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1800"
        alt="Cambodia Bus Express"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f4fbf5] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14">
        <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-black text-green-700 shadow">
          • TRAVEL SAFE • TRAVEL HAPPY
        </span>

        <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
          Travel Across Cambodia
          <span className="block text-green-700">Safely & Comfortably</span>
        </h1>

        <p className="mt-4 max-w-lg text-base font-semibold text-slate-600">
          Book your bus tickets online easily, choose your seats, and enjoy your
          journey with us.
        </p>

        <button
          onClick={() => setPage("fast")}
          className="mt-7 rounded-xl bg-green-700 px-7 py-3 font-black text-white shadow-xl transition hover:scale-105"
        >
          Book Ticket Now →
        </button>

        {/* SEARCH CARD */}
        <div className="mt-10 rounded-[1.5rem] bg-white p-4 shadow-2xl">
          <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
            <div className="rounded-xl border p-3">
              <p className="text-xs font-bold text-slate-500">From</p>
              <select className="mt-1 w-full font-black outline-none">
                {destinations.map((d, i) => (
                  <option key={i}>{d.from}</option>
                ))}
              </select>
            </div>

            <div className="rounded-xl border p-3">
              <p className="text-xs font-bold text-slate-500">To</p>
              <select className="mt-1 w-full font-black outline-none">
                {destinations.map((d, i) => (
                  <option key={i}>{d.to}</option>
                ))}
              </select>
            </div>

            <div className="rounded-xl border p-3">
              <p className="text-xs font-bold text-slate-500">Date</p>
              <input
                type="date"
                className="mt-1 w-full font-black outline-none"
              />
            </div>

            <div className="rounded-xl border p-3">
              <p className="text-xs font-bold text-slate-500">Passengers</p>
              <select className="mt-1 w-full font-black outline-none">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </div>

            <button
              onClick={() => setPage("fast")}
              className="rounded-xl bg-green-600 px-6 py-3 font-black text-white shadow hover:bg-green-700"
            >
              Search Buses 🔍
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* FEATURES */}
    <section className="mx-auto -mt-8 grid max-w-6xl gap-4 px-5 md:grid-cols-4">
      {[
        ["💺", "Comfortable Seats", "Wide & clean seats for your comfort"],
        ["🛡️", "Safe & Secure", "Your safety is our top priority"],
        ["⏰", "On Time", "We value your time and punctuality"],
        ["🎧", "24/7 Support", "We’re here to help anytime you need"],
      ].map(([icon, title, text]) => (
        <div
          key={title}
          className="rounded-[1.5rem] bg-white p-5 shadow-xl transition hover:-translate-y-1"
        >
          <div className="grid h-12 w-12 place-items-center rounded-full bg-green-600 text-2xl text-white">
            {icon}
          </div>
          <h3 className="mt-4 text-lg font-black">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{text}</p>
        </div>
      ))}
    </section>

    {/* POPULAR ROUTES */}
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-black">Popular Routes</h2>
        <button
          onClick={() => setPage("fast")}
          className="font-black text-green-700"
        >
          View all routes →
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {destinations.slice(0, 4).map((d, i) => {
          const imgs = [
            "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600",
            "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
          ];

          return (
            <div
              key={i}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-xl transition hover:-translate-y-1"
            >
              <div className="grid grid-cols-[95px_1fr] gap-4 p-4">
                <img
                  src={imgs[i]}
                  alt={d.to}
                  className="h-28 w-full rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-black">{d.from}</h3>
                  <p className="font-bold">↔</p>
                  <p className="text-lg font-black text-slate-900">{d.to}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    ⏱ {d.time}
                  </p>
                  <p className="mt-1 font-black text-green-600">
                    From {d.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setPage("fast")}
                className="mx-4 mb-4 w-[calc(100%-2rem)] rounded-xl bg-green-600 py-2.5 font-black text-white"
              >
                Book Now
              </button>
            </div>
          );
        })}
      </div>
    </section>

    {/* CUSTOMER FEEDBACK */}
    <section className="mx-auto max-w-6xl px-5 pb-12">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-black">Customer Feedback</h2>
        <p className="mt-2 text-slate-500">
          Share your experience with Cambodia Bus Express
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <form
          onSubmit={submitFeedback}
          className="rounded-[1.5rem] bg-white p-6 shadow-xl"
        >
          <h3 className="mb-4 text-xl font-black">Leave Feedback</h3>

          <input
            placeholder="Your name"
            value={feedbackForm.name}
            onChange={(e) =>
              setFeedbackForm({ ...feedbackForm, name: e.target.value })
            }
            className="mb-3 w-full rounded-xl border p-4 outline-none focus:border-green-500"
          />

          <select
            value={feedbackForm.rating}
            onChange={(e) =>
              setFeedbackForm({ ...feedbackForm, rating: e.target.value })
            }
            className="mb-3 w-full rounded-xl border p-4 outline-none focus:border-green-500"
          >
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Normal</option>
            <option value="2">⭐⭐ Bad</option>
            <option value="1">⭐ Very Bad</option>
          </select>

          <textarea
            rows="4"
            placeholder="Write your feedback..."
            value={feedbackForm.message}
            onChange={(e) =>
              setFeedbackForm({ ...feedbackForm, message: e.target.value })
            }
            className="mb-4 w-full rounded-xl border p-4 outline-none focus:border-green-500"
          />

          <button className="w-full rounded-xl bg-green-600 py-3 font-black text-white hover:bg-green-700">
            Submit Feedback
          </button>
        </form>

        <div className="grid gap-4">
          {feedbacks.map((f) => (
            <div key={f.id} className="rounded-[1.5rem] bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-green-100 font-black text-green-700">
                  {f.name?.[0] || "U"}
                </div>

                <div>
                  <h4 className="font-black">{f.name}</h4>
                  <p className="text-yellow-400">
                    {"⭐".repeat(Number(f.rating || 5))}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-slate-600">{f.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
)}
{/* FAST BOOKING PAGE */}
{page === "fast" && (
  <main className="min-h-screen bg-[#eef8ee] px-4 py-6">
    <div className="mx-auto max-w-[1500px]">
      <section className="relative mb-[-45px] h-[280px] overflow-hidden rounded-[32px] shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1800"
          alt="Bus header"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-green-950/75 to-green-500/20" />

        <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-12 text-white">
          <span className="mb-4 w-fit rounded-full bg-white/20 px-5 py-2 text-sm font-black backdrop-blur">
            ⚡ FAST BOOKING
          </span>

          <h1 className="text-4xl font-black md:text-6xl">
            Choose Your Trip
          </h1>

          <p className="mt-4 max-w-xl text-lg font-semibold text-white/90">
            Select vehicle, destination, departure time and choose your seats easily.
          </p>
        </div>
      </section>

      <div className="relative z-20 grid gap-6 lg:grid-cols-[1.65fr_0.85fr]">
        <section className="rounded-[32px] bg-white p-6 shadow-2xl">
          <FastTitle number="1" icon="🚌" title="Choose Vehicle Type" />

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {vehicleTypes.map((type) => {
              const image =
                type === "Bus"
                  ? "https://cambodianote.com/wp-content/uploads/2025/12/1.jpg"
                  : type === "Van"
                  ? "https://www.baolau.com/images/transport_classes/LAR-MV-GHE.png"
                  : "https://www.baolau.com/images/transport_classes/GI-B-GI.png";

              return (
                <button
                  type="button"
                  key={type}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      vehicle: type,
                      direction: "",
                      time: "",
                      seats: [],
                      seat: "",
                      floor: type === "Night Bus" ? "Ground Floor" : "",
                    })
                  }
                  className={`relative overflow-hidden rounded-[24px] border p-4 text-left shadow-lg transition hover:-translate-y-1 ${
                    booking.vehicle === type
                      ? "border-green-600 bg-green-50 ring-4 ring-green-100"
                      : "border-slate-200 bg-white hover:border-green-400"
                  }`}
                >
                  {booking.vehicle === type && (
                    <div className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-green-600 text-white shadow">
                      ✓
                    </div>
                  )}

                  <div className="flex h-32 items-center justify-center rounded-2xl bg-slate-50">
                    <img
                      src={image}
                      alt={type}
                      className="h-full w-full rounded-2xl object-contain p-2"
                    />
                  </div>

                  <h3 className="mt-4 text-xl font-black text-slate-900">
                    {type}
                  </h3>

                  <p className="text-sm font-semibold text-slate-500">
                    {type === "Bus" && "Standard seat service"}
                    {type === "Van" && "Fast small group travel"}
                    {type === "Night Bus" && "Bed layout with 2 floors"}
                  </p>
                </button>
              );
            })}
          </div>

          <FastTitle number="2" icon="📍" title="Choose Direction" />

          <div className="mb-8 grid gap-3 md:grid-cols-3">
            {destinations.map((d, index) => {
              const route = `${d.from} → ${d.to}`;

              return (
                <button
                  type="button"
                  key={index}
                  disabled={!booking.vehicle}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      direction: route,
                      time: "",
                      seats: [],
                      seat: "",
                    })
                  }
                  className={`rounded-2xl border px-4 py-4 text-sm font-black shadow-sm transition ${
                    !booking.vehicle
                      ? "cursor-not-allowed bg-slate-100 text-slate-400"
                      : booking.direction === route
                      ? "border-green-600 bg-green-50 text-green-700 ring-2 ring-green-100"
                      : "bg-white hover:border-green-400 hover:text-green-700"
                  }`}
                >
                  {route}
                </button>
              );
            })}
          </div>

          <div className="mb-8 grid gap-5 md:grid-cols-2">
            <div>
              <FastTitle number="3" icon="🗓" title="Departure Date" />
              <input
                type="date"
                value={booking.date}
                onChange={(e) =>
                  setBooking({ ...booking, date: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 font-bold shadow outline-none focus:border-green-500"
              />
            </div>

            <div>
              <FastTitle number="4" icon="⏰" title="Departure Time" />
              <select
                value={booking.time}
                onChange={(e) =>
                  setBooking({ ...booking, time: e.target.value, seats: [] })
                }
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 font-bold shadow outline-none focus:border-green-500"
              >
                <option value="">Select Departure Time</option>

                {routeSchedules
                  .filter(
                    (s) =>
                      s.vehicle === booking.vehicle &&
                      s.direction === booking.direction
                  )
                  .map((s) => (
                    <option key={s.id} value={s.time}>
                      {s.time} • KHR {Number(s.price || 0).toLocaleString()}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <FastTitle number="5" icon="💺" title="Select Seat / Bed" />

          <FastSeatSelection
            booking={booking}
            setBooking={setBooking}
            vanSeats={vanSeats}
            busSeats={busSeats}
            nightBusGround={nightBusGround}
            nightBusFirst={nightBusFirst}
          />
        </section>

        <aside className="h-fit rounded-[32px] bg-white p-6 shadow-2xl lg:sticky lg:top-6">
          <div className="mb-5 overflow-hidden rounded-[26px] bg-gradient-to-br from-green-700 to-green-500 p-6 text-white shadow-xl">
            <p className="font-bold text-white/80">Trip Summary</p>
            <h2 className="mt-2 text-4xl font-black">
              KHR {price.toLocaleString()}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <Row label="Vehicle" value={booking.vehicle || "-"} />
            <Row
              label="Floor"
              value={booking.vehicle === "Night Bus" ? booking.floor : "-"}
            />
            <Row label="Direction" value={booking.direction || "-"} />
            <Row
              label="Estimated Travel"
              value={
                booking.direction
                  ? `${tripDuration[booking.direction] || "-"} Hours`
                  : "-"
              }
            />
            <Row label="Departure Date" value={booking.date || "-"} />
            <Row label="Departure Time" value={booking.time || "-"} />
            <Row
              label="Seat / Bed"
              value={booking.seats?.length ? booking.seats.join(", ") : "-"}
            />
            <Row
              label="Unit Price"
              value={`KHR ${unitPrice.toLocaleString()}`}
            />
            <Row label="Total Seats" value={booking.seats?.length || 0} />
            <Row label="Discount" value="0" />
            <Row label="Net Price" value={`KHR ${price.toLocaleString()}`} />
          </div>

          <h3 className="mb-3 mt-6 font-black text-slate-900">
            📞 Contact Phone
          </h3>

          <div className="flex overflow-hidden rounded-2xl border shadow">
            <span className="border-r bg-slate-50 px-4 py-4 font-bold">
              +855
            </span>
            <input
              placeholder="012 XXX XXX"
              value={booking.phone}
              onChange={(e) =>
                setBooking({ ...booking, phone: e.target.value })
              }
              className="w-full px-4 outline-none"
            />
          </div>

          <h3 className="mb-3 mt-6 font-black text-slate-900">
            💳 Payment Method
          </h3>

          <Payment
            title="ABA KHQR"
            desc="Scan to pay with any banking app"
            selected={booking.payment === "ABA KHQR"}
            onClick={() => setBooking({ ...booking, payment: "ABA KHQR" })}
          />

          <Payment
            title="Credit / Debit Card"
            desc="Visa, Mastercard, UnionPay, JCB"
            selected={booking.payment === "Card"}
            onClick={() => setBooking({ ...booking, payment: "Card" })}
          />

          <button
            type="button"
            onClick={() => {
              if (!booking.vehicle || !booking.direction || !booking.date || !booking.time) {
                alert("Please complete vehicle, destination, date and time.");
                return;
              }

              if (!booking.seats || booking.seats.length === 0) {
                alert("Please select at least one seat.");
                return;
              }

              if (!booking.phone) {
                alert("Please enter phone number.");
                return;
              }

              if (!booking.payment) {
                alert("Please select payment method.");
                return;
              }

              setShowPayment(true);
            }}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-green-700 to-green-500 py-4 text-lg font-black text-white shadow-xl transition hover:scale-[1.02]"
          >
            🔒 Pay Now KHR {price.toLocaleString()}
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            🛡 Your payment is secure and encrypted
          </p>
        </aside>
      </div>
    </div>
  </main>
)}
{/* PRINT TICKET PAGE */}
      {page === "print" && (
        <section className="min-h-screen bg-[#eeeeee] px-6 py-12">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-2xl">
            <h2 className="mb-6 text-center text-3xl font-black text-[#168000]">
              Print Bus Ticket
            </h2>

            {!ticket ? (
              <div className="text-center">
                <p className="mb-5 text-slate-500">No ticket found. Please book your bus first.</p>
                <button onClick={() => setPage("fast")} className="rounded-xl bg-[#168000] px-6 py-3 font-bold text-white">
                  Go to Fast Booking
                </button>
              </div>
            ) : (
              <div id="ticket" className="rounded-2xl border-2 border-dashed border-green-500 p-6">
                <div className="flex items-center justify-between border-b pb-5">
                  <div>
                    <h3 className="text-2xl font-black text-[#168000]">BusTravel Ticket</h3>
                    <p className="font-semibold text-slate-500">Ticket No: {ticket.ticketNo}</p>
                  </div>

                  <img src={ticket.qr} className="h-32 w-32 rounded-xl border p-2" alt="Ticket QR Code" />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <TicketItem label="Vehicle" value={ticket.vehicle} />
                  <TicketItem label="Floor" value={ticket.vehicle === "Night Bus" ? ticket.floor : "-"} />
                  <TicketItem label="Destination" value={ticket.destination} />
                  <TicketItem label="Seat / Bed Number" value={ticket.seat} />
                  <TicketItem label="Departure Date" value={ticket.date} />
                  <TicketItem label="Departure Time" value={ticket.time} />
                  <TicketItem label="Phone Number" value={ticket.phone} />
                  <TicketItem label="Price" value={`KHR ${ticket.price}`} />
                </div>

                <div className="mt-6 rounded-xl bg-green-100 p-4 text-green-800">
                  <b>Check In:</b> {ticket.checkIn}
                </div>

                <button onClick={() => window.print()} className="mt-6 w-full rounded-xl bg-yellow-400 py-4 font-black text-black">
                  Print Ticket
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {page === "branches" && (
  <section className="min-h-screen bg-[#f4f4f4] px-6 py-12">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-10 text-center text-4xl font-black text-[#168000]">
        Our Branch Locations
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2"
          >
            <img
              src={branch.image}
              alt={branch.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-green-100 text-2xl">
                  📍
                </div>

                <h3 className="text-xl font-black text-[#168000]">
                  {branch.name}
                </h3>
              </div>

              <p className="mb-3">
                <b>Address:</b> {branch.address}
              </p>

              <p className="mb-3">
                <b>Phone:</b> {branch.phone}
              </p>

              <p className="mb-5">
                <b>Open:</b> {branch.open}
              </p>

              <a
                href={branch.map}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl bg-[#168000] py-3 text-center font-bold text-white"
              >
                View On Map
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl shadow-2xl">
        <iframe
          title="Cambodia Branches"
          src="https://maps.google.com/maps?q=Phnom%20Penh&t=&z=7&ie=UTF8&iwloc=&output=embed"
          className="h-[500px] w-full"
        />
      </div>
    </div>
  </section>
)}
{/* ADMIN PAGE */}
{page === "admin" && (
  <section className="min-h-screen bg-[#f5f7fb]">
    {!isAdmin ? (
      <div className="flex min-h-screen items-center justify-center px-6">
        <form
          onSubmit={handleAdminLogin}
          className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl"
        >
          <div className="text-center">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-green-100 text-3xl">
              🚌
            </div>
            <h2 className="text-3xl font-black">Admin Login</h2>
            <p className="mt-2 text-slate-500">Cambodia Bus Express</p>
          </div>

          <div className="mt-6 grid gap-4">
            <input
              placeholder="Email"
              value={adminLogin.email}
              onChange={(e) =>
                setAdminLogin({ ...adminLogin, email: e.target.value })
              }
              className="rounded-2xl border p-4 outline-none focus:border-green-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={adminLogin.password}
              onChange={(e) =>
                setAdminLogin({ ...adminLogin, password: e.target.value })
              }
              className="rounded-2xl border p-4 outline-none focus:border-green-500"
            />

            <button className="rounded-2xl bg-green-600 py-4 font-black text-white">
              Login
            </button>

            <p className="text-center text-sm text-slate-500">
              admin@gmail.com / 123456
            </p>
          </div>
        </form>
      </div>
    ) : (
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        {/* SIDEBAR */}
        <aside className="bg-gradient-to-b from-[#003d22] to-[#001d12] p-5 text-white">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-3xl">
              🚌
            </div>
            <div>
              <h1 className="text-xl font-black">Cambodia</h1>
              <p className="font-bold">Bus Express</p>
            </div>
          </div>

          {[
            "Dashboard",
            "Bookings",
            "Schedules",
            "Destinations",
            "Vehicles",
            "Users",
            "Promotions",
            "Payments",
            "Reports",
            "Settings",
          ].map((item, i) => (
            <button
              key={item}
              className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-bold transition ${
                i === 0 ? "bg-green-500" : "hover:bg-white/10"
              }`}
            >
              <span>
                {i === 0 && "🏠"}
                {i === 1 && "📋"}
                {i === 2 && "📅"}
                {i === 3 && "📍"}
                {i === 4 && "🚌"}
                {i === 5 && "👥"}
                {i === 6 && "🎟"}
                {i === 7 && "💳"}
                {i === 8 && "📊"}
                {i === 9 && "⚙️"}
              </span>
              {item}
            </button>
          ))}

          <div className="mt-8 overflow-hidden rounded-2xl bg-white/10">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-black">Cambodia Bus Express</h3>
              <p className="text-sm text-white/70">Safe Travel, Happy Journey</p>
            </div>
          </div>

          <button
            onClick={() => setIsAdmin(false)}
            className="mt-8 rounded-xl bg-white/10 px-4 py-3 font-bold"
          >
            🚪 Logout
          </button>
        </aside>

        {/* MAIN */}
        <main className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black">Dashboard</h2>
              <p className="text-slate-500">Welcome back, Admin</p>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-xl bg-white px-4 py-3 shadow">🔔</button>
              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow">
                <span className="text-2xl">👨‍💼</span>
                <div>
                  <p className="font-black">Admin</p>
                  <p className="text-xs text-slate-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mb-6 grid gap-5 md:grid-cols-4">
            <AdminStat icon="🎫" title="Total Bookings" value="1,248" color="bg-green-100 text-green-600" />
            <AdminStat icon="👥" title="Total Customers" value="3,756" color="bg-blue-100 text-blue-600" />
            <AdminStat icon="🚌" title="Total Vehicles" value="58" color="bg-orange-100 text-orange-600" />
            <AdminStat icon="💵" title="Total Revenue" value="$24,780" color="bg-purple-100 text-purple-600" />
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            {/* RECENT BOOKINGS */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-black">Recent Bookings</h3>
                <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-3">Booking ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Route</th>
                      <th className="p-3">Seats</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["BK-250525-001", "Sok Sovannrith", "Phnom Penh → Siem Reap", "A1, A2", "Confirmed"],
                      ["BK-250525-002", "Chhorn Pich", "Phnom Penh → Battambang", "B3", "Pending"],
                      ["BK-250525-003", "Lim Sothea", "Siem Reap → Phnom Penh", "C1, C2", "Confirmed"],
                      ["BK-250525-004", "Pich Chanmony", "Phnom Penh → Sihanoukville", "D4", "Cancelled"],
                    ].map((b) => (
                      <tr key={b[0]} className="border-b">
                        <td className="p-3 font-bold text-green-600">{b[0]}</td>
                        <td className="p-3">{b[1]}</td>
                        <td className="p-3">{b[2]}</td>
                        <td className="p-3">{b[3]}</td>
                        <td className="p-3">
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                            {b[4]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SMOOTH OVERVIEW */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-black">Booking Overview</h3>

              <div className="flex h-72 items-end gap-3 border-b border-l p-4">
                {[35, 45, 75, 58, 48, 68, 90, 135, 112, 56, 52, 98, 70].map(
                  (h, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-xl bg-gradient-to-t from-green-200 to-green-600 transition-all duration-700 hover:scale-105"
                        style={{ height: `${h}px` }}
                      ></div>
                      <span className="text-xs text-slate-400">{i + 1}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            {/* SCHEDULE */}
            <form onSubmit={addSchedule} className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-black">⏰ Add Schedule</h3>

              <div className="grid gap-3">
                <select
                  value={scheduleForm.vehicle}
                  onChange={(e) =>
                    setScheduleForm({ ...scheduleForm, vehicle: e.target.value })
                  }
                  className="rounded-xl border p-4"
                >
                  <option>Bus</option>
                  <option>Van</option>
                  <option>Night Bus</option>
                </select>

                <select
                  value={scheduleForm.direction}
                  onChange={(e) =>
                    setScheduleForm({
                      ...scheduleForm,
                      direction: e.target.value,
                    })
                  }
                  className="rounded-2xl border p-4"
                >
                  <option value="">Select Direction</option>

                  {destinations.map((d, index) => (
                    <option
                      key={index}
                      value={`${d.from} → ${d.to}`}
                    >
                      {d.from} → {d.to}
                    </option>
                  ))}
                </select>

                <input
                  type="time"
                  value={scheduleForm.time}
                  onChange={(e) =>
                    setScheduleForm({ ...scheduleForm, time: e.target.value })
                  }
                  className="rounded-xl border p-4"
                />
                <input
                    type="number"
                    placeholder="Price KHR"
                    value={scheduleForm.price}
                    onChange={(e) =>
                      setScheduleForm({
                        ...scheduleForm,
                        price: e.target.value,
                      })
                    }
                    className="rounded-2xl border p-4"
                  />
                  <label className="flex items-center gap-3 rounded-2xl border p-4 font-black">
                    <input
                      type="checkbox"
                      checked={scheduleForm.repeatDaily}
                      onChange={(e) =>
                        setScheduleForm({
                          ...scheduleForm,
                          repeatDaily: e.target.checked,
                        })
                      }
                    />
                    Repeat every day at this time
                  </label>
                <button className="rounded-xl bg-green-600 py-4 font-black text-white">
                  Save Schedule
                </button>
              </div>
            </form>

            {/* DESTINATION */}
            <form onSubmit={addDestination} className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-black">📍 Add Destination</h3>

              <div className="grid gap-3">
                <input placeholder="From" value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} className="rounded-xl border p-4" />
                <input placeholder="To" value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} className="rounded-xl border p-4" />
                <input placeholder="Travel Time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="rounded-xl border p-4" />
                <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="rounded-xl border p-4" />

                <button className="rounded-xl bg-blue-600 py-4 font-black text-white">
                  Add Destination
                </button>
              </div>
            </form>

            {/* QUICK ACTIONS */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-black">Quick Actions</h3>

              <div className="grid grid-cols-2 gap-4">
                <AdminAction icon="🚌" text="Add Schedule" />
                <AdminAction icon="📍" text="Add Destination" />
                <AdminAction icon="🎟" text="Add Promotion" />
                <AdminAction icon="📊" text="View Reports" />
              </div>

              <div className="mt-6">
                <label className="font-bold">Upload Promotion</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={uploadPromo}
                  className="mt-3 w-full rounded-xl border p-4"
                />
              </div>
            </div>
          </div>

          {/* SCHEDULE LIST */}
          <div className="mt-6 rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-black">Schedule Management</h3>

            <div className="grid gap-3">
              {routeSchedules.map((item) => (
  <div
    key={item.id}
    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-4"
  >
    <div>
      <p className="font-black text-green-700">
        {item.vehicle}
      </p>
      <p className="text-slate-600">{item.direction}</p>
    </div>

    <div className="flex items-center gap-3">
      <span className="rounded-full bg-green-100 px-5 py-2 font-black text-green-700">
        {item.time}
      </span>

      <button
        onClick={() =>
          setRouteSchedules(
            routeSchedules.filter((s) => s.id !== item.id)
          )
        }
      >
        Delete
      </button>
    </div>
  </div>
))}

              {routeSchedules.length === 0 && (
                <p className="rounded-xl bg-slate-100 p-4 text-center font-bold text-slate-500">
                  No schedule added yet.
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    )}
  </section>
)}
{showPayment && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
      <h2 className="mb-4 text-center text-2xl font-black">
        ABA KHQR Payment
      </h2>

      <img
        src="/khqr.jpg"
        alt="KHQR"
        className="mx-auto w-full rounded-2xl border"
      />

      <p className="mt-4 text-center text-lg font-bold text-green-700">
        Amount: KHR {price.toLocaleString()}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => setShowPayment(false)}
          className="flex-1 rounded-xl bg-slate-200 py-3 font-bold"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={() => {
            setShowPayment(false);
            saveTicket();
          }}
          className="flex-1 rounded-xl bg-green-600 py-3 font-bold text-white"
        >
          I Have Paid
        </button>
      </div>
    </div>
  </div>
)}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          45% { transform: translateX(0); }
          50% { transform: translateX(-100%); }
          95% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        .animate-slide {
          animation: slide 8s infinite;
        }

        @media print {
          body * {
            visibility: hidden;
          }

          #ticket,
          #ticket * {
            visibility: visible;
          }

          #ticket {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function SeatSelection({ booking, setBooking, vanSeats, busSeats, nightBusGround, nightBusFirst }) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-bold text-[#6b2d4a]">💺 Select Seat / Bed</h3>

      {!booking.vehicle && (
        <p className="rounded-xl bg-yellow-100 p-4 font-bold text-yellow-800">
          Please choose Bus, Van, or Night Bus first.
        </p>
      )}

      {booking.vehicle === "Van" && (
        <div className="max-w-md rounded-3xl bg-white p-5 shadow-xl">
          <div className="mb-4 rounded-xl bg-slate-200 py-2 text-center font-black">DRIVER</div>
          <div className="grid grid-cols-3 gap-3">
            {vanSeats.map((seat) => (
              <SeatButton
              key={seat}
              seat={seat}
              selected={booking.seats.includes(seat)}
              onClick={() => toggleSeat(seat)}
            />
            ))}
          </div>
        </div>
      )}

      {booking.vehicle === "Bus" && (
        <div className="max-w-xl rounded-3xl bg-white p-5 shadow-xl">
          <div className="mb-4 rounded-xl bg-slate-200 py-2 text-center font-black">DRIVER</div>
          <div className="grid grid-cols-4 gap-3">
            {busSeats.map((seat) => (
              <SeatButton
              key={seat}
              seat={seat}
              selected={booking.seats.includes(seat)}
              onClick={() => toggleSeat(seat)}
            />
            ))}
          </div>
        </div>
      )}

      {booking.vehicle === "Night Bus" && (
        <div className="rounded-3xl bg-white p-5 shadow-xl">
          <div className="mb-5 flex gap-3">
            {["Ground Floor", "First Floor"].map((floor) => (
              <button
                key={floor}
                onClick={() => setBooking({ ...booking, floor, seat: "" })}
                className={`rounded-xl px-5 py-3 font-black ${
                  booking.floor === floor ? "bg-green-600 text-white" : "bg-slate-100 text-black"
                }`}
              >
                {floor}
              </button>
            ))}
          </div>

          <div className="mb-4 rounded-xl bg-slate-200 py-2 text-center font-black">{booking.floor}</div>

          <div className="max-w-xl space-y-3">
            {(booking.floor === "Ground Floor" ? nightBusGround : nightBusFirst).map((row, index) => (
              <div key={index} className="grid grid-cols-[1fr_40px_1fr_1fr] gap-3">
                <BedButton
                  bed={row[0]}
                  selected={booking.seats.includes(row[0])}
                  onClick={() => toggleSeat(row[0])}
                />

                <div className="grid place-items-center text-xs font-bold text-slate-400">Walk</div>

                <BedButton
                  bed={row[1]}
                  selected={booking.seats.includes(row[1])}
                  onClick={() => toggleSeat(row[1])}
                />

                <BedButton
                  bed={row[2]}
                  selected={booking.seats.includes(row[2])}
                  onClick={() => toggleSeat(row[2])}
                />
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Left side = 1 person bed, right side = 2 beds.
          </p>
        </div>
      )}
    </div>
  );
}

function TicketItem({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-100 p-4">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <h4 className="text-lg font-black">{value}</h4>
    </div>
  );
}

function Step({ icon, title, text }) {
  return (
    <div className="flex items-center gap-5">
      <div className="text-5xl">{icon}</div>
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b bg-gray-200 px-4 py-3 text-sm">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}

function Payment({ title, desc, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`mb-3 flex w-full items-center justify-between rounded-xl border p-4 text-left ${
        selected ? "border-green-600 bg-green-50" : "bg-white"
      }`}
    >
      <div>
        <h4 className="font-black">{title}</h4>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>

      <div className="h-4 w-4 rounded-full border">
        {selected && <div className="h-full w-full rounded-full bg-green-600" />}
      </div>
    </button>
  );
}

function SeatSelectionNew({
  booking,
  setBooking,
  vanSeats,
  busSeats,
  nightBusGround,
  nightBusFirst,
}) {
  function toggleSeat(seat) {
    setBooking((prev) => {
      const currentSeats = prev.seats || [];
      const selected = currentSeats.includes(seat);

      return {
        ...prev,
        seats: selected
          ? currentSeats.filter((item) => item !== seat)
          : [...currentSeats, seat],
        seat: "",
      };
    });
  }

  return (
    <div>
      <SectionTitle icon="💺" title="Select Seat / Bed" />

      {!booking.vehicle && (
        <p className="rounded-2xl bg-yellow-100 p-4 font-bold text-yellow-800">
          Please choose vehicle first.
        </p>
      )}

      {booking.vehicle === "Van" && (
        <div className="max-w-lg rounded-[28px] bg-white p-5 shadow-xl">
          <div className="mb-5 rounded-2xl bg-slate-200 py-3 text-center font-black">
            DRIVER
          </div>

          <div className="grid grid-cols-3 gap-3">
            {vanSeats.map((seat) => (
              <SeatButton
                key={seat}
                seat={seat}
                selected={booking.seats?.includes(seat)}
                onClick={() => toggleSeat(seat)}
              />
            ))}
          </div>
        </div>
      )}

      {booking.vehicle === "Bus" && (
        <div className="max-w-2xl rounded-[28px] bg-white p-5 shadow-xl">
          <div className="mb-5 rounded-2xl bg-slate-200 py-3 text-center font-black">
            DRIVER
          </div>

          <div className="grid grid-cols-4 gap-3">
            {busSeats.map((seat) => (
              <SeatButton
                key={seat}
                seat={seat}
                selected={booking.seats?.includes(seat)}
                onClick={() => toggleSeat(seat)}
              />
            ))}
          </div>
        </div>
      )}

      {booking.vehicle === "Night Bus" && (
        <div className="rounded-[28px] bg-white p-5 shadow-xl">
          <div className="mb-5 flex gap-3">
            {["Ground Floor", "First Floor"].map((floor) => (
              <button
                type="button"
                key={floor}
                onClick={() =>
                  setBooking({
                    ...booking,
                    floor,
                    seats: [],
                    seat: "",
                  })
                }
                className={`rounded-2xl px-5 py-3 font-black ${
                  booking.floor === floor
                    ? "bg-green-600 text-white"
                    : "bg-slate-100 text-black"
                }`}
              >
                {floor}
              </button>
            ))}
          </div>

          <div className="mb-5 rounded-2xl bg-slate-200 py-3 text-center font-black">
            {booking.floor}
          </div>

          <div className="max-w-2xl space-y-3">
            {(booking.floor === "Ground Floor"
              ? nightBusGround
              : nightBusFirst
            ).map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_45px_1fr_1fr] gap-3"
              >
                <BedButton
                  bed={row[0]}
                  selected={booking.seats?.includes(row[0])}
                  onClick={() => toggleSeat(row[0])}
                />

                <div className="grid place-items-center text-xs font-bold text-slate-400">
                  Walk
                </div>

                <BedButton
                  bed={row[1]}
                  selected={booking.seats?.includes(row[1])}
                  onClick={() => toggleSeat(row[1])}
                />

                <BedButton
                  bed={row[2]}
                  selected={booking.seats?.includes(row[2])}
                  onClick={() => toggleSeat(row[2])}
                />
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Left side = 1 bed. Right side = 2 beds.
          </p>
        </div>
      )}
    </div>
  );
}

function SeatButton({ seat, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl py-5 text-lg font-black shadow transition hover:scale-105 ${
        selected
          ? "bg-green-600 text-white ring-4 ring-green-200"
          : "bg-slate-100 text-slate-900 hover:bg-green-50"
      }`}
    >
      💺 {seat}
    </button>
  );
}

function BedButton({ bed, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-20 rounded-2xl border-2 font-black shadow transition hover:scale-105 ${
        selected
          ? "border-green-700 bg-green-600 text-white ring-4 ring-green-200"
          : "border-slate-200 bg-green-50 text-green-800"
      }`}
    >
      🛏 {bed}
    </button>
  );
}
function SectionTitle({ icon, title }) {
  return (
    <h3 className="mb-4 flex items-center gap-2 text-xl font-black text-[#6b2d4a]">
      <span>{icon}</span>
      {title}
    </h3>
  );
}
function FastTitle({ number, icon, title }) {
  return (
    <h3 className="mb-4 flex items-center gap-3 text-xl font-black text-slate-900">
      <span className="text-green-600">{icon}</span>
      {number}. {title}
    </h3>
  );
}

function FastSeatSelection({
  booking,
  setBooking,
  vanSeats = [],
  busSeats = [],
  nightBusGround = [],
  nightBusFirst = [],
}) {
  function toggleSeat(seat) {
    if (!seat) return;

    setBooking((prev) => {
      const currentSeats = prev.seats || [];
      const selected = currentSeats.includes(seat);

      return {
        ...prev,
        seats: selected
          ? currentSeats.filter((s) => s !== seat)
          : [...currentSeats, seat],
        seat: "",
      };
    });
  }

  if (!booking.vehicle) {
    return (
      <div className="rounded-xl bg-yellow-100 p-4 font-bold text-yellow-800">
        Please choose vehicle first.
      </div>
    );
  }

  const selectedSeats = booking.seats || [];
  const safeNightRows =
    booking.floor === "First Floor" ? nightBusFirst : nightBusGround;

  if (booking.vehicle === "Van") {
    return (
      <div className="rounded-2xl border bg-white p-5 shadow-inner">
        <div className="mb-4 rounded-xl bg-slate-200 py-3 text-center font-black">
          DRIVER
        </div>

        <div className="grid grid-cols-3 gap-3">
          {vanSeats.map((seat) => (
            <FastSeatButton
              key={seat}
              label={seat}
              selected={selectedSeats.includes(seat)}
              onClick={() => toggleSeat(seat)}
            />
          ))}
        </div>

        <SelectedSeatBox
          selectedSeats={selectedSeats}
          onClear={() => setBooking({ ...booking, seats: [], seat: "" })}
        />
      </div>
    );
  }

  if (booking.vehicle === "Bus") {
    return (
      <div className="grid gap-5 rounded-2xl border bg-white p-5 shadow-inner md:grid-cols-[150px_1fr_200px]">
        <SeatLegend />

        <div>
          <div className="mb-4 rounded-full bg-slate-100 py-2 text-center text-xs font-black">
            FRONT
          </div>

          <div className="grid grid-cols-4 gap-3">
            {busSeats.map((seat) => (
              <FastSeatButton
                key={seat}
                label={seat}
                selected={selectedSeats.includes(seat)}
                onClick={() => toggleSeat(seat)}
              />
            ))}
          </div>
        </div>

        <SelectedSeatBox
          selectedSeats={selectedSeats}
          onClear={() => setBooking({ ...booking, seats: [], seat: "" })}
        />
      </div>
    );
  }

  if (booking.vehicle === "Night Bus") {
    return (
      <div className="rounded-2xl border bg-white p-5 shadow-inner">
        <div className="mb-5 flex gap-3">
          {["Ground Floor", "First Floor"].map((floor) => (
            <button
              type="button"
              key={floor}
              onClick={() =>
                setBooking({
                  ...booking,
                  floor,
                  seats: [],
                  seat: "",
                })
              }
              className={`rounded-xl px-5 py-3 font-black ${
                booking.floor === floor
                  ? "bg-green-600 text-white"
                  : "bg-slate-100"
              }`}
            >
              {floor}
            </button>
          ))}
        </div>

        <div className="mb-4 rounded-full bg-slate-100 py-2 text-center text-sm font-black">
          FRONT
        </div>

        <div className="grid gap-3">
          {safeNightRows.map((row, index) => {
            const beds = Array.isArray(row) ? row : [row];

            return (
              <div
                key={index}
                className="grid grid-cols-[1fr_50px_1fr_1fr] gap-3"
              >
                <FastBedButton
                  label={beds[0]}
                  selected={selectedSeats.includes(beds[0])}
                  onClick={() => toggleSeat(beds[0])}
                />

                <div className="grid place-items-center text-xs font-bold text-slate-400">
                  Walk
                </div>

                <FastBedButton
                  label={beds[1]}
                  selected={selectedSeats.includes(beds[1])}
                  onClick={() => toggleSeat(beds[1])}
                />

                <FastBedButton
                  label={beds[2]}
                  selected={selectedSeats.includes(beds[2])}
                  onClick={() => toggleSeat(beds[2])}
                />
              </div>
            );
          })}
        </div>

        <SelectedSeatBox
          title="Selected Beds"
          selectedSeats={selectedSeats}
          onClear={() => setBooking({ ...booking, seats: [], seat: "" })}
        />
      </div>
    );
  }

  return null;
}

function SeatLegend() {
  return (
    <div className="rounded-xl border bg-white p-4 text-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-5 w-5 rounded bg-green-600"></span> Selected
      </div>
      <div className="mb-3 flex items-center gap-2">
        <span className="h-5 w-5 rounded border bg-white"></span> Available
      </div>
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 rounded bg-slate-300"></span> Booked
      </div>
    </div>
  );
}

function SelectedSeatBox({ selectedSeats, onClear, title = "Selected Seats" }) {
  return (
    <div className="mt-5 rounded-xl bg-green-50 p-4 md:mt-0">
      <h4 className="font-black">
        {title} ({selectedSeats.length})
      </h4>

      <div className="mt-3 flex flex-wrap gap-2">
        {selectedSeats.map((s) => (
          <span
            key={s}
            className="rounded-md border border-green-500 bg-green-100 px-3 py-1 font-bold text-green-700"
          >
            {s}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={onClear}
        className="mt-5 text-sm font-bold text-red-500"
      >
        🗑 Clear All
      </button>
    </div>
  );
}

function FastSeatButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      disabled={!label}
      onClick={onClick}
      className={`rounded-xl border py-4 font-black shadow transition hover:scale-105 ${
        selected
          ? "border-green-700 bg-green-600 text-white"
          : "border-slate-200 bg-white hover:bg-green-50"
      }`}
    >
      {label || "-"}
    </button>
  );
}

function FastBedButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      disabled={!label}
      onClick={onClick}
      className={`h-16 rounded-xl border font-black shadow transition hover:scale-105 ${
        selected
          ? "border-green-700 bg-green-600 text-white"
          : "border-slate-200 bg-green-50 text-green-700"
      }`}
    >
      🛏 {label || "-"}
    </button>
  );
}
async function saveTicket() {
  const res = await fetch(`${API}/tickets/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: user?.id || null,
      schedule: selectedSchedule.id,
      floor: booking.floor || "",
      departure_date: booking.date,
      seats: booking.seats,
      phone: booking.phone,
      payment: booking.payment,
      total_price: price,
      status: "Paid",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert("Ticket save failed");
    return;
  }

  setMyTickets([data, ...myTickets]);
  setPage("tickets");
}
function AdminStat({ icon, title, value, color }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="flex items-center gap-4">
        <div className={`grid h-16 w-16 place-items-center rounded-full text-3xl ${color}`}>
          {icon}
        </div>
        <div>
          <p className="font-bold text-slate-500">{title}</p>
          <h3 className="text-3xl font-black">{value}</h3>
          <p className="text-sm font-bold text-green-600">↑ 18.6% vs last month</p>
        </div>
      </div>
    </div>
  );
}

function AdminAction({ icon, text }) {
  return (
    <button className="rounded-2xl bg-slate-50 p-5 text-center shadow transition hover:-translate-y-1 hover:bg-green-50">
      <div className="text-4xl">{icon}</div>
      <p className="mt-2 font-bold text-green-700">{text}</p>
    </button>
  );
}