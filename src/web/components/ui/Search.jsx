import { useRouter } from "next/router"
import Icon from "@/web/components/ui/Icon"

const Search = () => {
  const router = useRouter()
  const handleClick = () => {
    const searchTerm = document.getElementById("searchInput").value
    router.push(`/search-page?query=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <Icon
          icon="search"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 w-7"
        />
      </button>
      <input
        type="text"
        placeholder="Search..."
        id="searchInput"
        className="rounded-3xl p-2 pl-4 pr-9 border-black border-[1px] w-[250px]"
      />
    </div>
  )
}

export default Search
