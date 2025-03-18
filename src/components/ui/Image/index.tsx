interface ImageData {
  src: string
  alt: string
  width: number
  height: number
  contain?: boolean
}

const ImageCustom: React.FC<ImageData> = ({
  src,
  alt,
  width,
  height,
  contain
}) => {
  return (
    <>
      {src ? (
        <img
          src={src}
          srcSet={src}
          alt={alt}
          width={width}
          height={height}
          style={contain ? { objectFit: 'contain' } : undefined}
        />
      ) : (
        <>NoImage</>
      )}
    </>
  )
}

export default ImageCustom
