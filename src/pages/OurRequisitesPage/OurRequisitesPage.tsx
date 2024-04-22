"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./OurRequisitesPage.module.scss";
import Image from "next/image";
import Copy from "./Icon (1).png";

export const OurRequisitesPage: React.FC = (): React.JSX.Element => {
  const [data, setData] = useState(null);

  const handleCopy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);

  useEffect(() => {
    fetch("http://167.172.161.102:82/api/v1/payment-requisites")
      .then((response) => response.json())
      .then((data) => setData(data[3]));
  }, []);

  return (
    <div className={styles.main}>
      <h2>Наши реквизиты</h2>
      {data && (
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>ИНН</th>
              <td className={styles.data} onClick={() => handleCopy(data.inn)}>{data.inn} </td>
              <td onClick={() => handleCopy(data.inn)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>КПП</th>
              <td className={styles.data} onClick={() => handleCopy(data.kpp)}>{data.kpp} </td>
              <td onClick={() => handleCopy(data.kpp)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>ОГРН</th>
              <td className={styles.data} onClick={() => handleCopy(data.ogrn)}>{data.ogrn} </td>
              <td onClick={() => handleCopy(data.ogrn)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>ОКПО</th>
              <td className={styles.data} onClick={() => handleCopy(data.okpo)}>{data.okpo} </td>
              <td onClick={() => handleCopy(data.okpo)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>ОКВЭД</th>
              <td className={styles.data} onClick={() => handleCopy(data.gked)}>{data.gked}</td>
              <td onClick={() => handleCopy(data.gked)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>Расчетный счет</th>
              <td className={styles.data} onClick={() => handleCopy(data.payment_account)}>{data.payment_account}</td>
              <td onClick={() => handleCopy(data.payment_account)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>Корреспондентский счет</th>
              <td className={styles.data} onClick={() => handleCopy(data.correspondent_account)}>{data.correspondent_account} </td>
              <td onClick={() => handleCopy(data.correspondent_account)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>Название банка</th>
              <td className={styles.data} onClick={() => handleCopy(data.bank_name)}>{data.bank_name} </td>
              <td onClick={() => handleCopy(data.bank_name)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>БИК</th>
              <td className={styles.data} onClick={() => handleCopy(data.bank_bik)}>{data.bank_bik}</td>
              <td onClick={() => handleCopy(data.bank_bik)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>Адрес</th>
              <td className={styles.data} onClick={() => handleCopy(data.legal_address)}>{data.legal_address}</td>
              <td onClick={() => handleCopy(data.legal_address)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>Directory</th>
              <td className={styles.data} onClick={() => handleCopy(data.directory)}>{data.directory} </td>
              <td onClick={() => handleCopy(data.directory)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
            <tr>
              <th>Company</th>
              <td className={styles.data}  onClick={() => handleCopy(data.company)}>{data.company} </td>
              <td  onClick={() => handleCopy(data.company)}>
                <Image src={Copy} alt="copy" width={25} height={25} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
