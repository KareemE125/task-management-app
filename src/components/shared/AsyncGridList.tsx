/* eslint-disable react-refresh/only-export-components */
import React, { memo } from 'react';
import { createArrayOfSize } from "@/utils/commonHelpers";
import TLoading from "@/customTypes/loading";
import PlaceHolder from "@/components/shared/PlaceHolder";
import TComponentWithLoadingProps from "@/customTypes/componentWithLoadingProps";
import '@/styles/layout.css'

type TView = 'grid' | 'list'

type TGridListProps<T> = {
    view?: TView,
    list: T[],
    loading: TLoading,
    error: string | null
    Component: React.FC<TComponentWithLoadingProps<T>>
}

function AsyncGridList<T extends {id?: number}>({view='grid' , list, loading, error, Component }: TGridListProps<T>) {

    if(loading === 'failed'){
      return <PlaceHolder text={error??"Error has occurred!\nPlease check the network and try again"} />
    }

    if(loading === 'pending'){
        return <div className={view === 'grid'? 'grid-layout': 'list-layout'}>
            {createArrayOfSize(6).map((index) => <Component key={index} isLoading={true} />)}
        </div>
    }

    return (
        <section>
          { 
            list.length < 1
                ? <PlaceHolder text='No items found' />
                : <div className={view === 'grid'? 'grid-layout': 'list-layout'}>
                    {list.map((item, i) => <Component key={item.id || i} item={item} />)}
                </div>
          }
        </section>
    )
}

export default memo(AsyncGridList) as typeof AsyncGridList