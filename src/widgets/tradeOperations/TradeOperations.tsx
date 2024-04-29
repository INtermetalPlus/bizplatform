
import { TO_form } from "@/features/TradeOperations/model/TO_form";
import styles from "./TradeOperations.module.scss";
import { TO_firstHeader } from "@/features/TradeOperations/ui/TO_firstHeader";
import { TO_secondHeader } from "@/features/TradeOperations/ui/TO_secondHeader";

export const TradeOperations: React.FC = (): React.ReactElement => {
    return (
        <>
            <TO_firstHeader/>
            <TO_secondHeader/>
            <div className={styles.tradeOperation}>
                <TO_form/>
            </div>
        </>
    );
};