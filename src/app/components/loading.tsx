import Image from 'next/image'

export default function Loading() {
  return (
    <div>
      <Image
        src="../loading.svg"
        alt="Loading..."
        width={75}
        height={75}
      >
      </Image>
    </div>
  )
}