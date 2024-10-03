import { SearchFormContainer } from "./SearchForm.styles";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const SearchFormSchema = z.object({
  location: z
    .string()
    .min(3, { message: "Location is required" })
    .max(50, { message: "Location is too long" }),
  pickupDate: z.string().date(),
  returnDate: z.string().date(),
  pickupTime: z.string().time(),
  returnTime: z.string().time(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

const SearchForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });
  return (
    <SearchFormContainer
      onSubmit={handleSubmit((date) => {
        onSubmit(date);
        reset();
      })}
    >
      <section className="container">
        <label htmlFor="location">Location</label>
        <input
          {...register("location")}
          type="text"
          id="location"
          placeholder="Riga, Latvia"
        />
        {errors.location && <p className="error">{errors.location.message}</p>}
      </section>
      <section className="container">
        <label htmlFor="pickup">Pick-up date</label>
        <section>
          <input {...register("pickupDate")} type="date" id="pickup" />
          <input {...register("pickupTime")} type="time" />
        </section>
      </section>
      <section className="container">
        <label htmlFor="return">Pick-up date</label>
        <section>
          <input {...register("returnDate")} type="date" id="return" />
          <input {...register("returnTime")} type="time" />
        </section>
      </section>
      <button type="submit">Search</button>
    </SearchFormContainer>
  );
};

export default SearchForm;
