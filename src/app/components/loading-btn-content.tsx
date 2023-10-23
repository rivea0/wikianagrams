import LoadingIcon from './loadingIcon'

export default function LoadingBtnContent() {
  return (
    <span className="flex items-center justify-center gap-2">
      <LoadingIcon />
      <span>Searching</span>
    </span>
  )
}
