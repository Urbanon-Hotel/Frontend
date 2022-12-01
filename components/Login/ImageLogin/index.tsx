import Image from 'next/image';

export default function index() {
  return (
    <div>
      <Image
        src="/assets/sidelogin.png"
        width={500}
        height={500}
        alt="Urbanon Logo"
      />
    </div>
  );
}
