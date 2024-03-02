import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-center text-3xl mb-2">Neco o mne</h2>
      <p className="text-justify text-accent mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum
        est ut neque ultricies fermentum. Aenean tristique imperdiet sodales.
        Phasellus scelerisque ex sit amet tempus posuere. Donec eget quam sed
        velit cursus interdum ornare nec sapien. Sed hendrerit suscipit sapien
        condimentum fermentum. Sed pharetra nisl nisi, in iaculis mauris maximus
        vel. Curabitur maximus ut neque ac volutpat. Phasellus tellus lorem,
        consectetur a eros a, blandit tempus est. Nullam maximus metus massa, a
        pulvinar urna rhoncus id. Etiam mollis tincidunt rutrum. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Etiam sit amet lectus diam.
        Sed ornare pretium lectus sed bibendum. Nunc aliquet leo elit, quis
        eleifend dolor faucibus ac.
      </p>
      <Image src="/lawnMover.jpg" alt="Moje fotka" width="400" height="500" />
    </div>
  );
}
