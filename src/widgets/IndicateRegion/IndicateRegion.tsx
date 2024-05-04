import React, { useState, useEffect } from "react";
import styles from "./IndicateRegion.module.scss";
import Krestik from "./x-close.png";
import Image from "next/image";
import { BlueButton } from "@/shared/ui/blueButton";
import { Select } from "antd";
import { useCitiesStore } from "../../features/Region/citiesStore"
import { useCountriesStore } from "../../features/Region/countriesStore"
import { useRegionsStore } from "../../features/Region/regionsStore"

const { Option } = Select;

interface City {
  id: number;
  city_name: string;
  region: number;
}

interface Country {
  id: number;
  country_name: string;
}

interface Region {
  id: number;
  region_name: string;
  country: number;
}

interface IndicateRegionProps {
  onClose: () => void;
}

export const IndicateRegion: React.FC<IndicateRegionProps> = ({ onClose }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);

  const { fetchCities } = useCitiesStore();
  const { fetchCountries } = useCountriesStore();
  const { fetchRegions } = useRegionsStore();

  useEffect(() => {
    const fetchData = async () => {
      const citiesData: City[] = await fetchCities();
      const countriesData: Country[] = await fetchCountries();
      const regionsData: Region[] = await fetchRegions();
      setCities(citiesData);
      setCountries(countriesData);
      setRegions(regionsData);
    };

    fetchData();
  }, [fetchCities, fetchCountries, fetchRegions]);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const MAX_COUNT = 3;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <Image
        src={Krestik}
        width={24}
        height={24}
        alt="krestik"
        className={styles.krestik}
        onClick={handleOutsideClick}
      />
      <div className={styles.main}>
        <div>
          <p>Укажите регион</p>
          <Select
            maxCount={MAX_COUNT}
            mode="multiple"
            className={styles.select}
            defaultValue="Категории"
            optionLabelProp="label"
            style={{ width: "100%" }}
            placeholder="Найти регион"
            open={true}
          >
            {regions.map((region) => (
              <Option key={region.id} value={region.id} label={region.region_name}>
                <div className={styles.divSelect}>{region.region_name}</div>
              </Option>
            ))}
            {countries.map((country) => (
              <Option key={country.id} value={country.id} label={country.country_name}>
                <div className={styles.divSelect}>{country.country_name}</div>
              </Option>
            ))}
            {cities.map((city) => (
              <Option key={city.id} value={city.id} label={city.city_name}>
                <div className={styles.divSelect}>{city.city_name}</div>
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <BlueButton
            type="primaryButton"
            width="460px"
            text="Выбрать регион"
          />
        </div>
      </div>
    </div>
  );
};
