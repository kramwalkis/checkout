const Footer = () => {
  return (
    <footer className="bg-gray-200 flex justify-center items-center flex-col mt-auto">
        <div className="flex justify-between gap-3 sm:gap-7 px-2 pb-5 font-open-sans font-normal text-sm">
            <div>About Us</div>
            <div>Privacy Policy</div>
            <div>Terms Of Use</div>
        </div>
        <div className="pb-4 sm:pb-14 text-xs">©2023  All Rights Reserved.</div>
    </footer>
  )
}

export default Footer