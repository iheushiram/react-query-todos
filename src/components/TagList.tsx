import { FC, memo } from 'react'
import { useQueryTags } from '../hooks/useQueryTags'
import { TagItemMemo } from './TagItem'

const TagList = () => {
  const { status, data } = useQueryTags()
  console.log('rendered TagList')
  if (status === 'pending') return <div>{'Pending...'}</div>
  if (status === 'error') return <div>{'Error...'}</div>
  return (
    <div>
      {data?.map((tag) => (
        <div key={tag.id}>
          <ul>
            <TagItemMemo tag={tag} />
          </ul>
        </div>
      ))}
    </div>
  )
}

export const TagListMemo = memo(TagList)
