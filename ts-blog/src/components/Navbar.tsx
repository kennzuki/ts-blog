const Navbar = () => {
  return (
    <div className='bg-purple-700 text-white flex justify-between place-items-center w-full p-12'>
      <span className='font-bold text-3xl'>Kenki</span>
      <ul className='flex gap-4 place-items-center text-white'>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;
